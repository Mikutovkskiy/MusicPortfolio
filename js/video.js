var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "<img class='play' src='/img/pause.png' alt=''>";
    video.style.zIndex ='100';
    video.style.opacity = '1';
  } else {
    video.pause();
    btn.innerHTML = "<img class='play' src='/img/play.png' alt=''>";
    video.style.zIndex ='-1';
    video.style.opacity = '0';
  }
}