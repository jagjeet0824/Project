const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Car Tracker',
     message: 'Comp2068 Final Project'
  });
});

// GET: /about
router.get('/about', (req, res, next) => {
    // load the about view
    res.render('about', {
      title: 'About Car Tracker',
        message: 'This app is built with the MEAN Stack'
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
