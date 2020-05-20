//player logic
var wow = new WOW;
wow.init();

let video = document.getElementById("video");
let pauseButton = document.querySelector("#action-video button");
let btn = document.querySelector(".btn");
let menu = document.querySelector(".header__menu");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
  video.removeAttribute("autoplay");
  video.pause();
  pauseButton.innerHTML = "Paused";
}

function vidFade() {
  video.classList.add("stopfade");
}

video.addEventListener('ended', function () {
  video.pause();
  videoFade();
});

btn.addEventListener("click", function () {
  video.classList.toggle("stopfade");
  if (video.paused) {
    video.play();
    setTimeout(function () {
      video.style.opacity = '1';
    }, 500);
    video.style.zIndex = '1';
    btn.innerHTML = "<img class='play' src='/img/pause.png' alt=''>";
  } else {
    video.pause();
    btn.innerHTML = "<img class='play' src='/img/play.png' alt=''>";
    video.style.opacity = '0';
    setTimeout(function () {
      video.style.zIndex = '-1';
    }, 1000);
  }
})

$(document).ready(function () {
  $("#menu a").click(function () {
    $(this).css('color', 'red');
  });
});

$('#radio01').click(function () {
  $('.eng-text').removeClass('lang-hide');
  $('.eng-text').addClass('lang-show');
  $('.rus-text').addClass('lang-hide');
  $('#InputEmail').attr("placeholder", "Type your mail..");
  $('#InputText').attr("placeholder", "Type your message..");
  $('.button-submit').removeClass('rus-button');
  $('.button').removeClass('rus-button');
});

$('#radio02').click(function () {
  $('.eng-text').removeClass('lang-show');
  $('.eng-text').addClass('lang-hide');
  $('.rus-text').removeClass('lang-hide');
  $('#InputEmail').attr("placeholder", "Введите mail..");
  $('#InputText').attr("placeholder", "Введите свое сообщение..");
  $('.button-submit').addClass('rus-button');
  $('.button').addClass('rus-button');
});

var $page = $('html, body');
$('a[href*="#"]').click(function () {
  $('.header__menu a.header__menu-active').removeClass('header__menu-active');
  $(this).addClass('header__menu-active');
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 800);
  return false;
});

//hamburger menu icon animation
$(document).ready(function () {
  $('.hamburger-shell').click(function () {
    $('#menu').slideToggle(300);
    $('.top').toggleClass('rotate');
    $('.middle').toggleClass('rotate-back');
    $('.menu-name').toggleClass('bump');
  });
});


var typed3 = new Typed('.header__genres-eng', {
  strings: [
    'films..',
    'shorts..',
    'games..',
    'commercials..'
  ],
  typeSpeed: 60,
  backSpeed: 60,
  smartBackspace: true, // this is a default
  loop: true
});

//russian lang
var typed3 = new Typed('.header__genres-ru', {
  strings: [
    'фильмов..',
    'shorts..',
    'игр..',
    'рекламы..'
  ],
  typeSpeed: 60,
  backSpeed: 60,
  smartBackspace: true, // this is a default
  loop: true
});