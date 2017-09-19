$(window).on('load', function() {
  setTimeout(function() {
    var preloader = $('.preloader');
    var preloaderImg = preloader.find('.preloader-img');

    preloaderImg.fadeOut();
    preloader.delay(500).fadeOut();
  }, 2000);

});