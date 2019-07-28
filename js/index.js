$(document).ready(function() {
  workButtonListener();
  toggleNavbar();
});

function workButtonListener() {
  $('#work-button').mouseover(function() {
    $('#work-arrow').css({'transform' : 'rotate('+ 90 +'deg)'});
  });
  $('#work-button').mouseleave(function() {
    $('#work-arrow').css({'transform' : 'rotate('+ 0 +'deg)'});
  });
}

function toggleNavbar() {
  var navPressed = false;
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
