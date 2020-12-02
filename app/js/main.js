$(function () {

  document.getElementById('search-btn').onclick = function () {
    var el = document.getElementById('search-form');
    el.style.visibility === 'hidden' ? el.style.visibility = 'visible' : el.style.visibility = 'hidden';
  }

  $('.slider__inner').slick({
    dots: true,
    fade: true,
    arrows: false,
    autoplay: true
    });
 
});