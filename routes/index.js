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
  
  Product.findById(productId, function(err, product){
    if(err){
      console.log("Error: No Product Found.");
      return res.redirect('/');
    }
    res.redirect('/', {product: product});
  });
});

module.exports = router;
