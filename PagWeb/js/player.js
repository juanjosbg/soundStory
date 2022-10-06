window.onload = inicio;

var videos = ["ESCENA 1.mp4", "ESCENA 2.mp4",
    "ESCENA 3.mp4", "ESCENA 4.mp4", "ESCENA 5.mp4"];

var vid;
var videoActual = 1;

document.getElementById("video-manager").muted = true;


setTimeout(funToShow, 5000);

function funToShow() {
    // TODO: 
    document.getElementById("btn-show").style.visibility = "visible";

    console.log("aparece!");
}


// para arreglar el orden de los videos 
var orden = [];

function inicio() {
    vid = document.querySelector("video");
    vid.src = `/videos/${videos[videoActual]}`;
    //document.querySelector(".play").onclick = play;
    document.querySelector(".volumen").onclick = volumen;

    document.getElementById("video-manager").autoPlay = true;

    reordenar();
}

function unMuted() {
    document.getElementById("video-manager").muted = false;
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
    vid.volumen = !vid.volumen;
    this.src = `/images/Volumen${vid.volumen}.png`;

}

// Reordenar
function reordenar() {
    for (v of videos) {
        do {
            var azar = Math.floor(Math.random() * videos.length);
        } while (orden.indexOf(azar) >= 0)
        orden.push(azar);
    }
    reproducir();
}

function reproducir() {
    console.log(orden);

    let videoToca = orden[videoActual];
}

document.getElementById("play-volume").addEventListener("click", unMuted);
