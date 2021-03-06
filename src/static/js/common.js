console.log('i am common.js');



$(document).ready(function(){

// SMOOTH SCROLL

  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
   
        window.location.hash = hash;
      });
    }
  });

// SLICK SLIDER

  $('.slick-slider').slick({
    autoplay: true,
    adaptiveHeight: true,
    arrows: false,
    dots: true,
    infinite: true,
  });

  $("a.l-our-works--pic").fancybox({
    'transitionIn'  : 'elastic',
    'transitionOut' : 'elastic',
    'speedIn'   : 600, 
    'speedOut'    : 200, 
    'overlayShow' : false,
    'helpers': {
      overlay : {
        closeClick : true,  // if true, fancyBox will be closed when user clicks on the overlay
        speedOut   : 200,   // duration of fadeOut animation
        showEarly  : true,  // indicates if should be opened immediately or wait until the content is ready
        locked     : false   // if true, the content will be locked into overlay
      },
      title : {
        type : 'float' // 'float', 'inside', 'outside' or 'over'
      }
    }
  });

  $('.video-overlay').on('click', function() {
    $( ".video-overlay" ).fadeOut( "slow", function() {});
  });

});
