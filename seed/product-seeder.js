var mongoose = require('mongoose');
var Product = require('../models/dressroom');

mongoose.connect('mongodb://yutongliuytl:penis123@ds155864.mlab.com:55864/dressroom', {useNewUrlParser: true});

var products = [
    new Product({
        product: 'images/new_product1/KTVtee.png',
        leftForeArm: ' ', 
        rightForeArm: ' ', 
        leftArm: 'images/new_product1/KTVteeleft_upper.png', 
        rightArm: 'images/new_product1/KTVteeright_upper.png', 
        bodyCore: 'images/new_product1/KTVteebody.png'  
    }),
    new Product({
        product: 'images/new_product2/sageismls.png',
        leftForeArm: 'images/new_product2/sageismlsright_lower.png', 
        rightForeArm: 'images/new_product2/sageismlsleft_lower.png', 
        leftArm: 'images/new_product2/sageismlsleft_upper.png', 
        rightArm: 'images/new_product2/sageismlsright_upper.png', 
        bodyCore: 'images/new_product2/sageismlsbody.png'  
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
