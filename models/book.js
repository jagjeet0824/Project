// reference mongoose
const mongoose = require('mongoose');

// create the car schema
const bookSchema = new mongoose.Schema({
   author: {
       type:String,
       required: 'Author is required'
   },
   name: {
       type: String,
       required: 'Name is required'
   },
    year: {
       type: Number,
        required: 'Year is required'
    },
    price: {
        type: Number,
        required: 'Price is required'
    },
    colour: {
        type: String,

    }
});

// make it public
module.exports = mongoose.model('Book', bookSchema);