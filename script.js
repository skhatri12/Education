$(document).ready(function () {
  // if ($(window).width() <= 857) {
  $('.hamburger-menu').click(function () {
    $('.nav-list').show(150).toggleClass('slide');
    $(this).toggle();
    $('.hamburger-menu').hide();
    $('.cross-menu').show();
  });


  $('.cross-menu').click(function () {
    $('.nav-list').removeClass('slide');
    $('.hamburger-menu').fadeToggle(100);
    $('.cross-menu').hide();
    $(this).toggle();
  })


  $(document).on('click', function (event) {
    if ($(window).width() <= 857) {
      if (!$(event.target).closest('.nav-list, .hamburger-menu').length) {
        $('.nav-list').removeClass('slide');
        $('.hamburger-menu').show();
        $('.cross-menu').hide();
      }
    }
  });
}
);


