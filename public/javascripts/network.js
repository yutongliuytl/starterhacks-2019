var imageScaleFactor = 0.5;
var outputStride = 16;
var flipHorizontal = false;

var imageElement = document.getElementById('camera');

var posenet = posenet.load();

setInterval(function () {
  posenet.then(function(net){
    return net.estimateSinglePose(imageElement, imageScaleFactor, flipHorizontal, outputStride)
  }).then(function(pose){
    console.log(pose);
  })
}, 1000);


