$(document).ready(function() {

   /**
   * Smooth scrolling for local anchor tags
   */

  $('a[href*="#"]:not([href="#"])').click(function(e) {

    e.preventDefault();

    if (location.pathname.replace(/^\//, '') === 
      this.pathname.replace(/^\//, '') && 
      location.hostname === this.hostname) 
    {
      var link_item = '.nav-links li a';

      $('.nav-links li').removeClass('active');
      $(link_item).removeClass('active');

      $(this.parentElement).addClass('active');
      $(this).addClass('active');

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        $('html, body').animate({scrollTop: target.offset().top}, 1200);
        return false;
      }
    }

  });


  /**
   * Stick navbar to top of page once user scrolls past header
   */

  $(window).scroll(function () {
    
    if ($(window).scrollTop() > $('#title-block').height()) {
      $('#content').addClass('content-push');
      $('#nav-bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < $('#title-block').height()) {
      $('#content').removeClass('content-push');
      $('#nav-bar').removeClass('navbar-fixed');
    }
  });

});
