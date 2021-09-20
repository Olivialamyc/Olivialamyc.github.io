$(document).ready(function () {
  // navbar toggling
  $("#navbar-toggler").click(function () {
    $(".navbar-collapse").toggleClass("showNav");
  });

  // animated bar icon
  $("#navbar-toggler").click(function () {
    $(this).toggleClass("animatedNav");
  });

  // navbar background change in scroll
  $(window).scroll(function () {
    let position = $(window).scrollTop();
    if (position >= 60) {
      $(".navbar-wrapper").removeClass("container");
      $(".navbar-wrapper").addClass("fxd-navbar-wrapper");
    } else {
      $(".navbar-wrapper").addClass("container");
      $(".navbar-wrapper").removeClass("fxd-navbar-wrapper");
    }
  });

  // smooth scroll
  let link = $(".navbar-nav a.nav-link");
  link.click(function (e) {});

  // footer date
  const date = new Date();
  $(".copyright-date").text(date.getFullYear());
});

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $("#back2Top").fadeIn();
  } else {
    $("#back2Top").fadeOut();
  }
});
$(document).ready(function () {
  $("#back2Top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});
/*Scroll to top when arrow up clicked END*/

// Option 2 - jQuery Smooth Scrolling
$(".navbar a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});
