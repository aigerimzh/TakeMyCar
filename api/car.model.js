const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Car = new Schema({
  car_model: {
    type: String
  },
  car_mark: {
    type: String
  },
  car_color: {
    type: Number
  },
  car_year: {
    type: String
  }

},{
    collection: 'car'
});

module.exports = mongoose.model('Car', Car);