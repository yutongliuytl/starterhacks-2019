const canvas = document.getElementById('camera');

var interval;
var track;

navigator.mediaDevices.getUserMedia({video: true})
.then(gotMedia)
.catch(err => console.error('getUserMedia() failed: ', err));

function gotMedia(mediastream) {
track = mediastream.getVideoTracks()[0];
var imageCapture = new ImageCapture(track);
interval = setInterval(function () {
    imageCapture.grabFrame()
    .then(processFrame)
    .catch(err => console.error('grabFrame() failed: ', err));
}, 100);
}

function processFrame(imgData) {
canvas.width = imgData.width;
canvas.height = imgData.height;
canvas.getContext('2d').translate(imgData.width, 0);
canvas.getContext('2d').scale(-1,1);
canvas.getContext('2d').drawImage(imgData, 0, 0);
}

function toggleGrabFrame(e) {
    if (recording) {
        clearInterval(interval);
        track.stop();
        recording = false;
    } else {
        navigator.mediaDevices.getUserMedia({video: true})
        .then(gotMedia)
        .catch(err => console.error('getUserMedia() failed: ', err));
        recording = true;
    }
}
