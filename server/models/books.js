/*   File name: books.js
     Created By:SOHAM PATEL
     Student ID: 301200949
     WebApp Name: Favourite Book MidTerm
*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
