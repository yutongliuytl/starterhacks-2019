var express = require('express');
var router = express.Router();

var Product = require('../models/dressroom');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find({}, function(err, docs) {
    res.render('index', { products: docs })
  });
});

router.get('/:id', function(req, res, next){
  var productId = req.params.id;
  console.log("Dick")
  Product.findById(productId, function(err, product){
    if(err){
      console.log("Error: No Product Found.");
      return res.redirect('/');
    }else{
      console.log("Benny");
    //Redirect
        Product.find({},function(err,docs){
          if(!err)
           return res.redirect('/', {products: docs , selected: product});
        });
      
    }});
  });


module.exports = router;
