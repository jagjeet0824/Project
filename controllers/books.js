// references
const express =  require('express');
const router = express.Router();
const Book = require('../models/book');

// GET: /books
router.get('/', (req, res, next) => {
    // get book documents from db
    Book.find((err, books) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('books/index', {
                title: 'Book List',
                books: books
            });
        }
    });
});

// GET: /books/add
router.get('/add', (req, res, next) => {
    res.render('books/add',{
    title: 'Add a New Book'

});


});

// POST: /books/add
router.post('/add', (req, res, next) => {
    // use the Book Name to save the new cart
    Book.create({
        author: req.body.author,
        name: req.body.name,
        year: req.body.year,
        price: req.body.price,
        colour:req.body.colour
    },  (err, book) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/books');
        }
    })
})

// Get: /books/add/abc123
router.get('/delete/:_id', (req, res, next) => {
    // get the _id parameter from the url and store in a local variable
   let _id = req.params._id;

   // use the Book Name to delete the document with this id
    Book.remove({ _id: _id }, (err) =>{
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/books');
        }
    });
});

// GET: /books/edit/abc123
router.get('/edit/:_id', (req, res, next) => {
    // get _id param from url

    let _id = req.params._id;

    // use the Book model to find the selected document
    Book.findById(_id,  (err, book) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('books/edit', {
                title: 'book Details',
                book: book
            });
        }
    });
});

router.post('/edit/', (req, res, next) => {
    Book.findById( req.body.id )
    .then(function ( book ) {
        book.author = req.body.author
        book.name = req.body.name
        book.year = req.body.year
        book.price = req.body.price
        book.colour =req.body.colour

        book.save()
        .then(  function () {
          res.redirect( '/books' )
        })
        .catch( function ( err ) {
          next( err )
        })
      })
    .catch(function ( err ) {
      next( err )
    })
})

// make public
module.exports = router;