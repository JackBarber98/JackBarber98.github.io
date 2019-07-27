$(document).ready(function() {
  workButtonListener();
});

function workButtonListener() {
  $('#work-button').mouseover(function() {
    $('#work-arrow').css({'transform' : 'rotate('+ 90 +'deg)'});
  });
  $('#work-button').mouseleave(function() {
    $('#work-arrow').css({'transform' : 'rotate('+ 0 +'deg)'});
  });
}
