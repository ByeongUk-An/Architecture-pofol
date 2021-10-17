$(function () {
  // Trigger
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".gnb").toggleClass("active");
  });
  $("section, .menu a").click(function () {
    $(".gnb").removeClass("active");
    $(".trigger").removeClass("active");
  });

  //  Smooth Scrolling
  $(".menu a, .gototop").click(function () {
    $.scrollTo(this.hash || 0, 900);
  });

  // Change With Scroll Header
  let head = $("header").innerHeight();
  $(window).scroll(function () {
    if ($(window).scrollTop() > head) {
      $("header, .gototop").addClass("active");
    } else {
      $("header, .gototop").removeClass("active");
    }
  });
});
