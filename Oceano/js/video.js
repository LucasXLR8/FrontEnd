var vid = document.getElementById('video');
var btn = document.getElementById('botao');

function myFunction(){
    if (vid.paused) {
        vid.play();
        btn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i> Pause';
    } else {
        vid.pause();
        btn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i> Play';
    }
}