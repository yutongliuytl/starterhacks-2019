var mongoose = require('mongoose');
var Product = require('../models/dressroom');

mongoose.connect('mongodb://localhost:27017/dressroom', {useNewUrlParser: true});

var products = [
    new Product({
        product: 'images/product1/KTVtee.png',
        leftForeArm: ' ', 
        rightForeArm: ' ', 
        leftArm: 'images/product1/leftArm.png', 
        rightArm: 'images/product1/rightArm.png', 
        bodyCore: 'images/product1/bodyCore.png'  
    }),
    new Product({
        product: 'images/product1/sageismls.png',
        leftForeArm: 'images/product2/leftForeArm.png', 
        rightForeArm: 'images/product2/rightForeArm.png', 
        leftArm: 'images/product2/leftArm.png', 
        rightArm: 'images/product2/rightArm.png', 
        bodyCore: 'images/product2/bodyCore.png'  
    })
]

var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}