//player logic
let wow = new WOW;
wow.init();

SmoothScroll({
  stepSize: 40
});

//lang swithcer
$('#radio01').click(function () {
  $('.eng-text').removeClass('lang-hide').addClass('lang-show');
  $('.rus-text').addClass('lang-hide');
  $('#InputEmail').attr("placeholder", "Type your mail..");
  $('#InputText').attr("placeholder", "Type your message..");
});

$('#radio02').click(function () {
  $('.eng-text').removeClass('lang-show').addClass('lang-hide');
  $('.rus-text').removeClass('lang-hide');
  $('#InputEmail').attr("placeholder", "Введите mail..");
  $('#InputText').attr("placeholder", "Введите свое сообщение..");
});

let $page = $('html, body');
$('a[href*="#"]').click(function () {
  $('.header__menu a.header__menu-active').removeClass('header__menu-active');
  $(this).addClass('header__menu-active');
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1300);
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

let typedEng = new Typed('.header__genres-eng', {
  strings: [
    'films..',
    'shorts..',
    'games..',
    'commercials..'
  ],
  typeSpeed: 60,
  backSpeed: 60,
  smartBackspace: true,
  loop: true
});

let typedRu = new Typed('.header__genres-ru', {
  strings: [
    'фильмов..',
    'shorts..',
    'игр..',
    'рекламы..'
  ],
  typeSpeed: 60,
  backSpeed: 60,
  smartBackspace: true,
  loop: true
});

jQuery(document).ready(function ($) {
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    prevArrow: '<img class="slick-next" src="/img/left.svg" alt="">',
    nextArrow: '<img class="slick-prev" src="/img/right.svg" alt="">',

    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [{
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 760,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});