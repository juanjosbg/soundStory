window.onload = inicio;

var videos = ["ESCENA 1.mp4", "ESCENA 2.mp4",
    "ESCENA 3.mp4", "ESCENA 4.mp4", "ESCENA 5.mp4"];

var vid;
var videoActual = 1;

// para arreglar el orden de los videos 
var orden = [];

function inicio() {
    vid = document.querySelector("video");
    vid.src = `/videos/${videos[videoActual]}`;

    document.querySelector(".play").onclick = play;
    document.querySelector(".volumen").onclick = volumen;
}

// play - Pause
function play() {
    if (vid.paused) {
        vid.play();
        document.querySelector(".play").src = "/images/Pause.png";
    } else {
        vid.pause();
        document.querySelector(".play").src = "/images/PlayBtn.png";
    }
}

// volumen - muted
function volumen() {
    vid.volumen = !videos.volumen;
    this.src = `/images/Volumen${vid.volumen}.png`;

}