(function(){
  const header = $('.sticky-header');
  const stickyPostition = header.position().top;

  const handleScroll = () => {
    const scrollTop = $(this).scrollTop();

    if (scrollTop < stickyPostition) {
      header.removeClass('sticky-header__fix');
    }
    else if (scrollTop > stickyPostition ) {
      header.addClass('sticky-header__fix');
    }
  }

  $(window).on("scroll", handleScroll);
})();
