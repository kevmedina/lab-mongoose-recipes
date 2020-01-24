const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
 })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

  // create a recipe
  Recipe.create(data)
  .then(recipe => console.log(recipe))
  .catch(err => console.log(`An error occurred: ${err}`));

  Recipe.insertMany(data)
  .then(recipe => console.log(recipe))
  .catch(err => console.log(`An error occured: ${err}`));


