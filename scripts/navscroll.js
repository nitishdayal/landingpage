$(document).ready(function() {
  /**
   * Smooth scrolling for local anchor tags
   */
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      && location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target :
        $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({scrollTop: target.offset().top}, 1000);
        return false;
      }
    }
  });
  /**
   * Stick navbar to top of page once user scrolls past header
   */
  $(window).scroll(function () {
    
    if ($(window).scrollTop() > 600) {
      $('#content').addClass('content-push');
      $('#nav-bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 601) {
      $('#content').removeClass('content-push');
      $('#nav-bar').removeClass('navbar-fixed');
    }
  });
});
