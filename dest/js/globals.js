$(document).ready(function () {
  // menu
  $(".menu-toggle").on("click", function () {
    $(this).siblings(".menu-sub").slideToggle();
  });

  // navbar
  $('.navbar-mobile-btn').on('click', function () {
    $('.navbar-mobile, .navbar-backdrop').addClass('is-show');
    $('body').addClass('over-hidden');
  });
  $('.navbar-backdrop, .navbar-mobile-close, .navbar-close').on('click', function () {
    $('.navbar-mobile, .navbar-backdrop').removeClass('is-show');
    $('body').removeClass('over-hidden');
  });

  // move top button
  // $(window).on('scroll', function(){
  //   if ($(this).scrollTop() > 200) {
  //     $('.btn-movetop').fadeIn(500);
  //   } else {
  //   $('.btn-movetop').fadeOut(500);
  //   }
  // });
  // $(".btn-movetop").on("click", function(e){
  //   e.preventDefault();
  //   $('html, body').animate({
  //     scrollTop: 0
  //   }, 800);
  // });
});