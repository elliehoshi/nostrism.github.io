;(function($) {

  'use strict';

  if (isTouch) { return ; }

  var favicons = [
    '/favicon.ico?v2',
    '/images/favicons/01.ico',
    '/images/favicons/02.ico',
    '/images/favicons/03.ico',
    '/images/favicons/04.ico',
  ];

  (function favicon(i) {
    $('link[rel="shortcut icon"]').remove();
    $('head').append($('<link>').attr('rel', 'shortcut icon').attr('href', favicons[i % 5]));
    setTimeout(function() {
      favicon(i + 1);
    }, 1500);
  })(0);

})(jQuery);



;(function($) {

  'use strict';

  if (location.href.indexOf('#!') > 0) {
    $('body').addClass('blocked');
    var d = $('#' + location.href.slice(location.href.indexOf('#!')+3));
    d.find('.project-image').each(function(i, el){
      $(el).append($('<img>').attr('src', $(el).data('image')));
    });
    d.fadeIn(function(){
      // d.animate({scrollTop: 0}, 512);
    });
  }

  $('#details').on('click', function(e) {

    e.preventDefault();
    $('body').toggleClass('blocked');
    $('.contacts').slideToggle();
    $(this).toggleClass('openned').toggleClass('a');

  });


  $('.project-open').on('click', function(e) {

    e.preventDefault();
    history.pushState(null, null, $(this).attr('href').slice(1));
    $('body').addClass('blocked');
    var d = $(this).next('.project-details');
    d.find('.project-image').each(function(i, el){
      $(el).append($('<img>').attr('src', $(el).data('image')));
    });
    d.fadeIn(function(){
      // d.animate({scrollTop: 0}, 512);
    });

  });


  $(document).on('keyup', function(e) {

    if (e.keyCode == 27) {
      closeAndUnblock();
    }

  });


  $('.my-projects').hover(function() {
    $(this).addClass('animated hover');
  }, function() {
    $(this).removeClass('hover');
  });

  $(".my-projects").bind("animationiteration webkitAnimationIteration oanimationiteration MSAnimationIteration", function(){
    if (!$(this).hasClass('hover')) {
      $(this).removeClass('animated')
    }
  });

  $('.project-details, .project .close').on('click', function(e) {

    e.preventDefault();
    closeAndUnblock();

  });


  $('.project-modules').on('click', function(e) {
    e.stopPropagation();
  });


  $('.my-projects').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 500 }, 512)
  });

  function closeAndUnblock() {
    $('body').removeClass('blocked');
    $('.project-details').scrollTop(0);
    $('.project-details').fadeOut();
    $('.contacts').slideUp();
    $('#details').removeClass('openned').removeClass('a');
    history.pushState(null, null, '/');
  }

})(jQuery);
