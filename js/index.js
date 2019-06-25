$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= 500) {
    if ($(window).width() < 900) {
      $("#nav-bar")
        .addClass("green")
        .addClass("animated")
        .addClass("fadeInDown")
        .addClass("fixed-top");
    } else {
      $("#nav-bar")
        .addClass("white")
        .addClass("animated")
        .addClass("fadeInDown")
        .addClass("fixed-top");
    }
  } else {
    if ($(window).width() < 900) {
      $("#nav-bar")
        .removeClass("fixed-top")
        .removeClass("green");
    } else {
      $("#nav-bar")
        .removeClass("fixed-top")
        .removeClass("white");
    }

    $("#nav-bar")
      .removeClass("fixed-top")
      .removeClass("white")
      .removeClass("green");
  }
});
