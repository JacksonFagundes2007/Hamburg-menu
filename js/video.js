function pause() {
    let btn = document.querySelector('#btnPause');
    let video = document.querySelector('#video');


    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }

}