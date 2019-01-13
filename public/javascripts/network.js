var imageScaleFactor = 0.5;
var outputStride = 16;
var flipHorizontal = false;

var imageElement = document.getElementById('camera');

var posenet = posenet.load();

setInterval(function() {
  posenet.then(function(net) {
    return(net.estimateSinglePose(imageElement, imageScaleFactor, flipHorizontal, outputStride)).then(function(pose) {
      console.log(pose);
      generate_point(pose);
    });
  });
}, 100);


function generate_point(pose) {
  var canvas = document.getElementById('camera')

  var head = document.getElementById('head')
  var coords1 = pose.keypoints[0].position

  head.style.position = 'absolute';
  head.style.top = canvas.offsetTop + Math.floor(coords1.y) + 'px';
  head.style.left = canvas.offsetLeft + Math.floor(coords1.x) + 'px';

  var rights = document.getElementById('rights')
  var coords2 = pose.keypoints[6].position

  rights.style.position = 'absolute';
  rights.style.top = canvas.offsetTop + Math.floor(coords2.y) + 'px';
  rights.style.left = canvas.offsetLeft + Math.floor(coords2.x) + 'px';

  var lefts = document.getElementById('lefts')
  var coords3 = pose.keypoints[5].position

  lefts.style.position = 'absolute';
  lefts.style.top = canvas.offsetTop + Math.floor(coords3.y) + 'px';
  lefts.style.left = canvas.offsetLeft + Math.floor(coords3.x) + 'px';

  var rightw = document.getElementById('rightw')
  var coords4 = pose.keypoints[10].position

  rightw.style.position = 'absolute';
  rightw.style.top = canvas.offsetTop + Math.floor(coords4.y) + 'px';
  rightw.style.left = canvas.offsetLeft + Math.floor(coords4.x) + 'px';

  var leftw = document.getElementById('leftw')
  var coords5 = pose.keypoints[9].position

  leftw.style.position = 'absolute';
  leftw.style.top = canvas.offsetTop + Math.floor(coords5.y) + 'px';
  leftw.style.left = canvas.offsetLeft + Math.floor(coords5.x) + 'px';
}