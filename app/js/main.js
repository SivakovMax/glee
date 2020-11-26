$(function () {

  document.getElementById('user__nav-search').onclick = function () {
    var el = document.getElementById('user__nav__form');
    el.style.visibility === 'hidden' ? el.style.visibility = 'visible' : el.style.visibility = 'hidden';
  }
 
});