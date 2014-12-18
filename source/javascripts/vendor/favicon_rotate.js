;(function(global) {

  'use strict';

  global.FaviconRotate = (function() {

    return function(arr) {
      (function favicon(i) {
        var old_el = document.querySelector('link[rel="shortcut icon"]');
        if (old_el) {
          old_el.parentElement.removeChild(old_el);
        }
        var new_el = document.createElement('link');
        new_el.setAttribute('rel', 'shortcut icon');
        new_el.setAttribute('href', arr[i % 5]);
        document.getElementsByTagName('head')[0].appendChild(new_el);
        setTimeout(function() {
          favicon(i + 1);
        }, 1500);
      })(0);
    }

  })();

})(window);
