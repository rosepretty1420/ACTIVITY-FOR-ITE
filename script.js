// ==============================
// TEACHER'S DAY PHOTO GALLERY
// ==============================

const photos = [

    "images/teacher-photo-1.jpg",

    "images/teacher-photo-2.jpg",

    "images/teacher-photo-3.jpg",

    "images/teacher-photo-4.jpg"

];


function changePhoto(number) {

    const photo =
        document.getElementById("teacherPhoto");


    // Fade out

    photo.style.opacity = "0";


    setTimeout(function() {

        photo.src = photos[number - 1];

        photo.style.opacity = "1";

    }, 200);

}



// ==============================
// MUSIC
// ==============================

function playMusic() {

    const frame =
        document.getElementById("musicFrame");

    const button =
        document.getElementById("musicButton");


    // Add autoplay to YouTube video

    frame.src =
        "https://www.youtube.com/embed/GcLXZVREOvA?autoplay=1";


    button.innerHTML =
        "🎵 Music Playing ❤️";

}