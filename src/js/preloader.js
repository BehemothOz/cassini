$(window).on('load', function() {
  setTimeout(function() {
    const preloader = $('.preloader');
    const preloaderImg = preloader.find('.preloader-img');

    preloaderImg.fadeOut();
    preloader.delay(500).fadeOut();
  }, 1100);
});