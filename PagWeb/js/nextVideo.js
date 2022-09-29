var otherVideo = document.querySelector('.video-selector');
var videos = ['Vid-1.mp4', 'Vid-2.mp4', 'Vid-3.mp4'];

var i = 0;

function next(){
    if( i = videos.length -1) i = -1;
    i++; 
    return SetVideo();
}

function SetVideo(){
    return otherVideo.setAttribute('src', '/Videos/' + videos[i]);
}