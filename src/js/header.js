$(window).on("scroll", function() {

  var stickyPostition = $('.sticky-header').position().top;

  if ($(this).scrollTop() < 394.1875) {
    $('.sticky-header').removeClass('sticky-header__fix');

  } else {

  if ($(this).scrollTop() > stickyPostition ) {
      $('.sticky-header').addClass('sticky-header__fix');
    }
  }
});