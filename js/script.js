/* JS for the (De)Buggy Board website.
   Authors: Aaron Reyes, Erik Pintar
 */

var CONTAINER_WIDTH = '95%'; // http://getskel.com/docs#helper-classes-container
var CSS_RESET = 'full'; // http://getskel.com/docs#normalization-browser-styles

(function($, sk) {

  /* initialize skel for CSS formatting. see full list of config options here:
     http://getskel.com/docs#configuration-reference */
  sk.init({
    reset: CSS_RESET,
    containers: CONTAINER_WIDTH,
    breakpoints: {
      'global': {
        range: '*', // apply to all styles
        href: 'css/style.css'
      },
      'desktop': {
        media: '(min-width: 736px)',
        href: 'css/style-desktop.css',
        grid: {
          gutters: 50, // padding between grid objects
        }
      },
      'mobile': {
        media: '(max-width: 736px)',
        href: 'css/style-mobile.css',
        containers: '100%!',
        grid: {
          collapse: true, // allow for containers to take up width of screen
          gutters: 20, // padding between grid objects
        },
        viewport: {
          scalable: false, // do not allow for user to pinch-zoom
        }
      }
    }
  });

  $(function() {

    var $window = $(window),
        $body = $('body');

    // Disable animations/transitions until the page has loaded.
    $body.addClass('is-loading');
    $window.on('load', function() {
      $body.removeClass('is-loading');
    });

  });

})(jQuery, skel);
