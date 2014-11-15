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
