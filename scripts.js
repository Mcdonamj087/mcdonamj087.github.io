const $this = $(this);

/************* Nav Shadow on Scroll *************/

var $losnav = $('#los-nav');
var range = 120; // sets the scroll distance to animate box-shadow opacity from 0 to maxShadowOpacity
var maxShadowOpacity = 0.15; // sets the end opacity value after scrolling to max range

$(window).scroll(function() {
  var scrollTop = $this.scrollTop();
  if (scrollTop <= 0) {
    $losnav.removeAttr('style');
  } else if (scrollTop > 0 && scrollTop < range) {
    var scrollShadow = Math.floor(100 * maxShadowOpacity * scrollTop / range) / 100; // calculates new shadow opacity amount based on distance scrolled from top of window
    $losnav.css('box-shadow', '0px 2px 26px rgba(0, 0, 0, '+scrollShadow+')')
  } else {
    $losnav.css('box-shadow', '0px 2px 26px rgba(0, 0, 0, '+maxShadowOpacity+')')
  }
  
});

/************* Scroll to # Navigation *************/

$('#los-nav li a').click(function() {  // on clicking a navigation link
  var clickedHash = $(this).attr('href'); // store href value into variable 'clickedHash'
  $('html, body').animate({ //animate html/body to section with # in clickedHash
      scrollTop: $('section'+clickedHash).offset().top-120
  }, 500);
});

