// .main-menu > li에 마우스를 올렸을때 해당요소 하위에 있는 자식요소인 .sub-menu에
// 클래스를  toggle시킨다 ( sub-menu-active)


$(document).ready(
  function() {
    var menu = $('.main-menu > li');
    var span = $('.main-menu span');
    var last_item = $('.sub-menu li:last-child a');


    menu.hover(function() {
      $(this).find('.sub-menu').toggleClass('sub-menu-active');
    });


    span.focusin(function() {
      $(this).siblings('.sub-menu').addClass('sub-menu-active');
    });


    last_item.focusout(function() {
      $(this).parents('.sub-menu').removeClass('sub-menu-active');

    });
  });