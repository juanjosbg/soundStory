window.onload = inicio;

let vid;

document.getElementById("video-manager").muted = true;

setTimeout(funToShow, 5000);

function funToShow() {
    // TODO: 
    document.getElementById("btn-show").style.visibility = "visible";
    console.log("aparece!");
}



function inicio() {
    vid = document.querySelector("video");
    document.querySelector(".volumen").onclick = volumen;
    document.getElementById("video-manager").autoPlay = true;

    reordenar();
}


// volumen - muted  
function volumen() {
    vid.volumen = !vid.volumen;
    this.src = `/images/Volumen${vid.volumen}.png`;
}

ocument.getElementById("play-volume").addEventListener("click", unMuted);