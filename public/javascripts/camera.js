const canvas = document.getElementById('camera');

var interval;
var track;
var recording = true;
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
// canvas.getContext('2d').scale(Math.floor(document.height / imgData.height), Math.floor(document.width * 0.75 / imgData.width));
canvas.getContext('2d').drawImage(imgData, 0, 0);
}

document.getElementById("stop").addEventListener("click", toggleGrabFrame)

function toggleGrabFrame(e) {
    if (recording) {
        clearInterval(interval);
        track.stop();
        recording = false;
        document.getElementsByTagName("button")[0].classList.remove("btn-danger");
        document.getElementsByTagName("button")[0].classList.add("btn-success");
        document.getElementById("stop").innerHTML = " PLAY "
    } else {
        navigator.mediaDevices.getUserMedia({video: true})
        .then(gotMedia)
        .catch(err => console.error('getUserMedia() failed: ', err));
        recording = true;
        document.getElementsByTagName("button")[0].classList.remove("btn-success");
        document.getElementsByTagName("button")[0].classList.add("btn-danger");
        document.getElementById("stop").innerHTML = " STOP "

    }
}
