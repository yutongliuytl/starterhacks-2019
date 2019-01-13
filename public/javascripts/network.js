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
  var scale_factor = parseInt(window.innerWidth) * 0.75 / 640;

  var head = document.getElementById('head')
  var coords1 = pose.keypoints[0].position

  head.style.position = 'absolute';
  head.style.top = Math.floor(coords1.y * scale_factor) + 'px';
  head.style.left = canvas.offsetLeft + Math.floor(coords1.x * scale_factor) + 'px';

  var rights = document.getElementById('rights')
  var coords2 = pose.keypoints[6].position

  rights.style.position = 'absolute';
  rights.style.top = Math.floor(coords2.y * scale_factor) + 'px';
  rights.style.left = canvas.offsetLeft + Math.floor(coords2.x * scale_factor) + 'px';

  var lefts = document.getElementById('lefts')
  var coords3 = pose.keypoints[5].position

  lefts.style.position = 'absolute';
  lefts.style.top = Math.floor(coords3.y * scale_factor) + 'px';
  lefts.style.left = canvas.offsetLeft + Math.floor(coords3.x * scale_factor) + 'px';

  var rightw = document.getElementById('rightw')
  var coords4 = pose.keypoints[10].position

  rightw.style.position = 'absolute';
  rightw.style.top = Math.floor(coords4.y * scale_factor) + 'px';
  rightw.style.left = canvas.offsetLeft + Math.floor(coords4.x * scale_factor) + 'px';

  var leftw = document.getElementById('leftw')
  var coords5 = pose.keypoints[9].position

  leftw.style.position = 'absolute';
  leftw.style.top = Math.floor(coords5.y * scale_factor) + 'px';
  leftw.style.left = canvas.offsetLeft + Math.floor(coords5.x * scale_factor) + 'px';

}