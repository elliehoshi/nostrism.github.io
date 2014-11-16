;(function() {

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
    var old_el = document.querySelector('link[rel="shortcut icon"]');
    if (old_el) {
      old_el.parentElement.removeChild(old_el);
    }
    var new_el = document.createElement('link');
    new_el.setAttribute('rel', 'shortcut icon');
    new_el.setAttribute('href', favicons[i % 5]);
    document.getElementsByTagName('head')[0].appendChild(new_el);
    setTimeout(function() {
      favicon(i + 1);
    }, 1500);
  })(0);

})();
