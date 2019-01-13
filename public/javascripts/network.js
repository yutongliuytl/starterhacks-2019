var imageScaleFactor = 0.5;
var outputStride = 16;
var flipHorizontal = false;
var templates = false
var imageElement = document.getElementById('camera');
var posenet = posenet.load();
var socket = io.connect();

socket.on('news', function (data) {
  console.log("product")
  console.log("I am here")
console.log(data);
  LAlower.style.backgroundImage = "url("+ data.hello.leftForeArm +")";
  LAlower.style.backgroundSize = "auto";
  LAupper.style.backgroundImage= "url("+ data.hello.leftArm+")";
  LAupper.style.backgroundSize= "auto";
  RAlower.style.backgroundImage= "url('"+data.hello.rightForeArm +"')";
  RAlower.style.backgroundSize= "auto";
  RAupper.style.backgroundImage= "url('"+data.hello.rightArm +"')";
  RAupper.style.backgroundSize= "auto";
  BC.style.backgroundImage= "url("+ data.hello.bodyCore+")";
  BC.style.backgroundSize= "auto";
  socket.emit('my other event', { my: 'data' });
});



setInterval(function() {
  posenet.then(function(net) {
    return(net.estimateSinglePose(imageElement, imageScaleFactor, flipHorizontal, outputStride)).then(function(pose) {
      generate_point(pose);
      generate_rectangle(pose);
    });
  });
}, 100);


function generate_point(pose) {
  var scale_factor = parseInt(window.innerWidth) * 0.75 / 640;

  var head = document.getElementById('head')
  var coords1 = pose.keypoints[0].position

  head.style.position = 'absolute';
  head.style.top = Math.floor(coords1.y * scale_factor) + 'px';
  head.style.left = offset + Math.floor(coords1.x * scale_factor) + 'px';

  var rights = document.getElementById('rights')
  var coords2 = pose.keypoints[6].position

  rights.style.position = 'absolute';
  rights.style.top = Math.floor(coords2.y * scale_factor) + 'px';
  rights.style.left = offset + Math.floor(coords2.x * scale_factor) + 'px';

  var lefts = document.getElementById('lefts')
  var coords3 = pose.keypoints[5].position

  lefts.style.position = 'absolute';
  lefts.style.top = Math.floor(coords3.y * scale_factor) + 'px';
  lefts.style.left = offset + Math.floor(coords3.x * scale_factor) + 'px';

  var rightw = document.getElementById('rightw')
  var coords4 = pose.keypoints[10].position

  rightw.style.position = 'absolute';
  rightw.style.top = Math.floor(coords4.y * scale_factor) + 'px';
  rightw.style.left = offset + Math.floor(coords4.x * scale_factor) + 'px';

  var leftw = document.getElementById('leftw')
  var coords5 = pose.keypoints[9].position

  leftw.style.position = 'absolute';
  leftw.style.top = Math.floor(coords5.y * scale_factor) + 'px';
  leftw.style.left = offset + Math.floor(coords5.x * scale_factor) + 'px';
}

const leftArmLower = ["leftElbow", "leftWrist"]
const leftArmUpper = ["leftShoulder", "leftElbow"]
const rightArmLower = ["rightElbow", "rightWrist"]
const rightArmUpper = ["rightShoulder", "rightElbow"]
const bodyCore = ["leftShoulder", "rightShoulder", "rightHip", "leftHip"]
const lstBodyParts = [leftArmLower, leftArmUpper, rightArmLower, rightArmUpper, bodyCore]
const lstBodyPartsStr = ["leftArmLower", "leftArmUpper", "rightArmLower", "rightArmUpper", "bodyCore"]

var element = document.getElementsByTagName('body')[0]

createDiv(lstBodyPartsStr, element)

function generate_rectangle(pose) {
  const lstBodyCoordinates = getBodyPartPosition (lstBodyParts, pose);
  rectangles(lstBodyCoordinates, lstBodyPartsStr,element);
  
}

var LAlower  = document.getElementById('leftArmLower')
var LAupper  = document.getElementById('leftArmUpper')
var RAlower  = document.getElementById('rightArmLower')
var RAupper  = document.getElementById('rightArmUpper')
var BC       = document.getElementById('bodyCore')



