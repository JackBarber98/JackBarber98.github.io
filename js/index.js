$(document).ready(function() {
  workButtonListener();
  toggleNavbar();
  resizeNavbar();
});

var navPressed = false;

function workButtonListener() {
  $('#work-button').mouseover(function() {
    $('#work-arrow').css({'transform' : 'rotate('+ 90 +'deg)'});
  });
  $('#work-button').mouseleave(function() {
    $('#work-arrow').css({'transform' : 'rotate('+ 0 +'deg)'});
  });
}

function toggleNavbar() {
  $('#nav-icon').click(function() {
    navPressed = !navPressed;
    if (navPressed) {
      $('#navbar').animate({'left' : '0'}, 300);
      $('#nav-icon').addClass('fa-times');
      $('#nav-icon').removeClass('fa-bars');
    } else {
      hideNavbar();
    }
  });

  $('.button').click(function() {
    navPressed = !navPressed;
    hideNavbar();
  });
}

function hideNavbar() {
  $('#navbar').animate({'left' : '-100%'}, 300);
  $('#nav-icon').addClass('fa-bars');
  $('#nav-icon').removeClass('fa-times');
}

function resizeNavbar() {
  $(window).resize(function() {
    if (window.innerWidth > 779) {
      navPressed = false;
      $('#navbar').css({
        'font-size': 'initial',
        'height': 'initial',
        'padding': 'initial',
        'top': 'initial',
        'left': 'initial',
        'width': '100vw'
      });
    } else {
      navPressed = false;
      $('#navbar').css({'font-size': '1.3rem',
          'height': '100vh',
          'padding': '1rem 0',
          'width': '300px',
          'top': '0',
          'left': '-100%'
        });
    }
    $('#nav-icon').addClass('fa-bars');
    $('#nav-icon').removeClass('fa-times');
  });
}
