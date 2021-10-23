/*   File name: books.js
     Created By: Gagandeep Singh
     Student ID: 301146293
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
