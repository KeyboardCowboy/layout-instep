(function ($) {
  $(document).ready(function() {
    var nav = $('nav#main-nav');
    var pos = nav.position();

    stickyCheck();

    $(window).resize(stickyCheck).scroll(stickyCheck);

    function stickyCheck() {
      // Nav Collapsed
      if ($("*[flag='mobile']").width() == 1 || $(window).scrollTop() >= pos.top) {
        $('body').addClass('sticky');
      }
      else {
        $('body').removeClass('sticky');
      }
    };
  });
})(jQuery);
