$(document).ready(function() {
  var tab = $('.tab');
  tab.on('click focusin', function() {
    $(this).parent('.tab-board').addClass('active').siblings('.tab-board').removeClass('active');
  });
});