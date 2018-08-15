const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: '',
     message: '',
      images: ''
  });
});


// GET: /about
router.get('/about', (req, res, next) => {
    // load the about view
    res.render('about', {
      title: 'About Famous Books',
        message: 'Find Your Favourite Books'
    });
});
 // GET: /contact
router.get('/contact', (req, res, next) => {

 res.render('contact', {
    title: 'Contact Us',
      message: 'Here is how to reach us....'

 });

});
module.exports = router;
