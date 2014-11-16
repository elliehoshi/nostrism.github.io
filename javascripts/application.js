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

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-39373310-1', 'auto');
  ga('send', 'pageview');

        (function (d, w, c) {
            (w[c] = w[c] || []).push(function() {
                try {
                    w.yaCounter22617679 = new Ya.Metrika({id:22617679,
                            webvisor:true,
                            clickmap:true,
                            trackLinks:true,
                            accurateTrackBounce:true});
                } catch(e) { }
            });

            var n = d.getElementsByTagName("script")[0],
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
            s.type = "text/javascript";
            s.async = true;
            s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else { f(); }
        })(document, window, "yandex_metrika_callbacks");

})(jQuery);
