window.onload = inicio;

var videos = ["Vid-1.mp4", "Vid-2.mp4",
    "Gon's Rock, Paper, Scissors..mp4",
    "Gon2.mp4"
];

var vid;
var videoActual = 1;

function inicio() {
    vid = document.querySelector("video");
    vid.src = `/videos/${videos[videoActual]}`;

    document.querySelector("play").onclick = play;
}

function play() {
    if(vid.paused)
    vid.play();
}