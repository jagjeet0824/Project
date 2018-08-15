// references
const express =  require('express');
const router = express.Router();
const Car = require('../models/car');

// GET: /cars
router.get('/', (req, res, next) => {
    // get car documents from db
    Car.find((err, cars) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('cars/index', {
                title: 'Car List',
                cars: cars
            });
        }
    });
});

// GET: /cars/add
router.get('/add', (req, res, next) => {
    res.render('cars/add',{
    title: 'Add a New Car'

});


});

// POST: /cars/add
router.post('/add', (req, res, next) => {
    // use the Car model to save the new cart
    Car.create({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        mileage: req.body.mileage,
        colour:req.body.colour
    },  (err, car) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/cars');
        }
    })
})

// Get: /cars/add/abc123
router.get('/delete/:_id', (req, res, next) => {
    // get the _id parameter from the url and store in a local variable
   let _id = req.params._id;

   // use the Car model to delete the document with this id
    Car.remove({ _id: _id }, (err) =>{
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/cars');
        }
    });
});

// GET: /cars/edit/abc123
router.get('/edit/:_id', (req, res, next) => {
    // get _id param from url

    let _id = req.params._id;

    // use the Car model to find the selected document
    Car.findById(_id,  (err, car) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('cars/edit', {
                title: 'car Details',
                car: car
            });
        }
    });
});

router.post('/edit/', (req, res, next) => {
    Car.findById( req.body.id )
    .then(function ( car ) {
        car.make = req.body.make
        car.model = req.body.model
        car.year = req.body.year
        car.mileage = req.body.mileage
        car.colour =req.body.colour

        car.save()
        .then(  function () {
          res.redirect( '/cars' )
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