var express = require('express');
var router = express.Router();
var Hero = require('../models/heroModel');

// get all heros
router.get('/', function(req, res) {
  Hero.find({}, function(err, results) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('successful get heros ->', results);
      res.status(200).send(results);
    }
  });
});

// post to create a new hero
router.post('/', function(req, res) {
  console.log('inside hero post', req.body);

  var newHero = new Hero(req.body);
  console.log('newHero ->', newHero);

  newHero.save(function(err) {
    console.log('here');
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('successful hero created');
      res.sendStatus(201);
    }
  });
});

module.exports = router;
