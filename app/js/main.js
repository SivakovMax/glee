$(function () {

  document.getElementById('header__search-block-btn').onclick = function () {
    var el = document.getElementById('header__search-form');
    el.style.visibility === 'hidden' ? el.style.visibility = 'visible' : el.style.visibility = 'hidden';
  }

  $('.slider-main').slick({
    dots: true,
    fade: true,
    arrows: false,
    // autoplay: true
    });

    var mixer = mixitup('.products__content');
 
});