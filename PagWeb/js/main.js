const panoImage = document.querySelector('.pano-image');
const bosquePano = './images/bosque.jpg';

const panorama = new PANOLENS.ImagePanorama(bosquePano);
const viewer = new PANOLENS.Viewer({
    container: panoImage,
    autoRotate: true,
    autoRotateSpeed: 0.4
});


// Run viewer
viewer.add(panorama);

