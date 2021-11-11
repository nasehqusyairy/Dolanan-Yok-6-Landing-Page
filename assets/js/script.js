$(document).ready(function () {
  $(".navbar .nav-link,.navbar-brand").click(function (e) {
    let href = $(this).attr("href");
    $("html").animate({
      scrollTop: $(href).offset().top - 56
    });
    e.preventDefault();
  });
});