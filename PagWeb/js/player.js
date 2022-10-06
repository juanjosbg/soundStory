window.onload = inicio;

function inicio() {
    document.querySelector(".volumen").onclick = volumen;
    
    document.getElementById("video-manager").autoPlay = false;
}

function unMuted() {
    if(document.getElementById("video-manager").muted){

        document.getElementById("video-manager").muted = false;
    } else {
        document.getElementById("video-manager").muted = true;
    }
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

document.getElementById("play-volume").addEventListener("click", unMuted);



/* var videos = ["ESCENA 1.mp4", "ESCENA 2.mp4",
    "ESCENA 3.mp4", "ESCENA 4.mp4", "ESCENA 5.mp4"]; */

/* document.getElementById("video-manager").muted = true; 
setTimeout(funToShow, 5000);

function funToShow() {
    // TODO: 
    document.getElementById("btn-show").style.visibility = "visible";
    console.log("aparece!");
} */