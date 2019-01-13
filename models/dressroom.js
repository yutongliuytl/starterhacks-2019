var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    product: {type: String, required:true},
    leftForeArm: {type: String, required:true}, 
    rightForeArm: {type: String, required:true}, 
    leftArm: {type: String, required:true}, 
    rightArm: {type: String, required:true}, 
    bodyCore: {type: String, required:true}   
});

module.exports = mongoose.model('Product', schema);