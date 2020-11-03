const express = require('express');
const router = express.Router();

const Book = require('../models/Book')

// /books
router.get('/', (req, response, next) => {

  Book.find().then((booksFromDB) => {
    response.render('book-list', { allTheBooks: booksFromDB })
  })

});


// /books/:id
router.get('/:id', (req, response, next) => {

  // req.params.id

  Book.findById(req.params.id).then((bookFromDB) => {
    response.render('book-details', bookFromDB)
  })

});

module.exports = router;