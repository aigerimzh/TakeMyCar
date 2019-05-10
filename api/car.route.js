const express = require('express');
const carRoutes = express.Router();

// Require Business model in our routes module
let Car = require('./car.model');

// Defined store route
carRoutes.route('/add').post(function (req, res) {
  let car = new Car(req.body);
  car.save()
    .then(car => {
      res.status(200).json({'car': 'car in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
carRoutes.route('/').get(function (req, res) {
    Car.find(function(err, cars){
    if(err){
      console.log(err);
    }
    else {
      res.json(cars);
    }
  });
});

// Defined edit route
carRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Car.findById(id, function (err, car){
      res.json(car);
  });
});

//  Defined update route
carRoutes.route('/update/:id').post(function (req, res) {
    Car.findById(req.params.id, function(err, car) {
    if (!car)
      res.status(404).send("data is not found");
    else {
        car.car_model = req.body.car_model;
        car.car_mark = req.body.car_mark;
        car.car_color = req.body.car_color;
        car.car_year = req.body.car_year;
        car.save().then(car => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
carRoutes.route('/delete/:id').get(function (req, res) {
    Car.findByIdAndRemove({_id: req.params.id}, function(err, car){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = carRoutes;