;(function($) {

  'use strict';

  if (isTouch) { return ; }

  var favicons = [
    '/favicon.ico?v2',
    '/img/favicons/01.ico',
    '/img/favicons/02.ico',
    '/img/favicons/03.ico',
    '/img/favicons/04.ico',
  ];

  (function favicon(i) {
    $('link[rel="shortcut icon"]').remove();
    $('head').append($('<link>').attr('rel', 'shortcut icon').attr('href', favicons[i % 5]));
    setTimeout(function() {
      favicon(i + 1);
    }, 1500);
  })(0);

})(jQuery);
