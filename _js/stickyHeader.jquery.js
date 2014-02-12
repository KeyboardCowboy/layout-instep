(function ($) {
  $(document).ready(function() {
    var sticky = $('nav#main-nav');
    var pos = sticky.position();

    $(window).scroll(function() {
      if ($(window).scrollTop() >= pos.top) {
        sticky.addClass('sticky');
      }
      else {
        sticky.removeClass('sticky');
      }
    });
  });
})(jQuery);
