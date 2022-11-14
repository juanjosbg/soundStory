/* window.onload = inicio; */

let videoRef = document.getElementById("video-manager")
let modal = document.getElementById("myModal");
let modal2 = document.getElementById("myModal2");
let modal3 = document.getElementById("myModal3");
let span = document.getElementsByClassName("close")[0];
let redesSociales = document.getElementById("redesSociales");
let contador = 1;

document.getElementById("btn-play").addEventListener("click", playVid);
document.getElementById("btn-pause").addEventListener("click", pauseVid);

document.getElementById("btn-volumen").addEventListener("click", unMutedVid);
document.getElementById("btn-mute").addEventListener("click", unMutedVid);

/*
    fUNCTION PLAY / PAUSE
    ============================================================= 
*/

function play() {
    if (vid.paused) {
        vid.play();
        document.querySelector(".play").src = "/images/Pause.png";
    } else {
        vid.pause();
        document.querySelector(".play").src = "/images/PlayBtn.png";
    }
}


/*
    BTN PLAY /PAUSE 
    ============================================================= 
*/

function playVid() {
    document.getElementById("video-manager").play();
    document.getElementById("btn-play").style.visibility = "hidden";
    document.getElementById("btn-pause").style.visibility = "visible";
}

function pauseVid() {
    document.getElementById("video-manager").pause();
    document.getElementById("btn-pause").style.visibility = "hidden";
    document.getElementById("btn-play").style.visibility = "visible";
}

videoRef.addEventListener("timeupdate", function () {
    if (contador == 1) { //Modal 1
        if (videoRef.currentTime >= 54) {
            modal.style.display = "block";

        }
    } else if (contador == 2) { //Modal 2
        let durationVideo = videoRef.duration;
        if (videoRef.currentTime >= (durationVideo - 1)) {
            modal2.style.display = "block";
        }
    } else {
        let durationVideo = videoRef.duration;
        if (videoRef.currentTime >= (durationVideo - 1)) {
            redesSociales.style.display = "none";
            modal3.style.display = "block";
        }
    }
});


/*
    fUNCTION UNMUTE / MUTE
    ============================================================= 
*/

function unMutedVid() {
    if (document.getElementById("video-manager").muted) {
        document.getElementById("video-manager").muted = false;
        /* ==== */
        document.getElementById("btn-mute").style.visibility = "hidden";
        document.getElementById("btn-volumen").style.visibility = "visible";
    } else {
        document.getElementById("video-manager").muted = true;
        /* === */
        document.getElementById("btn-volumen").style.visibility = "hidden";
        document.getElementById("btn-mute").style.visibility = "visible";
    }
}

/*
    BTN UNMUTE / MUTE 
    ============================================================= 
*/




/*
    ============================================================= 
*/

function nextVideo(idmodal, srcvideo) {
    videoRef.currentTime = 0;
    let modal = document.getElementById(idmodal);
    modal.style.display = "none";
    videoRef.src = srcvideo;
    videoRef.play();
    contador++;
}

function recargarHistoria(idmodal) {
    contador = 1;
    videoRef.src = "/videos/Scnena1.mp4";
    let modal = document.getElementById(idmodal);
    modal.style.display = "none";
    redesSociales.style.display = "block";
    videoRef.play();
}