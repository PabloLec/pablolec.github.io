$(window).on("load", function () {
  function fade(pageLoad) {
    var windowTop = $(window).scrollTop(),
      windowBottom = windowTop + $(window).innerHeight();
    var min = 0.1,
      max = 1,
      threshold = 0.01;

    $(".personal-project").each(function () {
      var objectHeight = $(this).outerHeight(),
        objectTop = $(this).offset().top,
        objectBottom = $(this).offset().top + objectHeight;

      /* Fade element in/out based on its visible percentage */
      if (objectTop < windowTop) {
        if (objectBottom > windowTop) {
          $(this).fadeTo(0, min + (max - min) * ((objectBottom - windowTop) / objectHeight));
        } else if ($(this).css("opacity") >= min + threshold || pageLoad) {
          $(this).fadeTo(0, min);
        }
      } else if (objectBottom > windowBottom) {
        if (objectTop < windowBottom) {
          $(this).fadeTo(0, min + (max - min) * ((windowBottom - objectTop) / objectHeight));
        } else if ($(this).css("opacity") >= min + threshold || pageLoad) {
          $(this).fadeTo(0, min);
        }
      } else if ($(this).css("opacity") <= max - threshold || pageLoad) {
        $(this).fadeTo(0, max);
      }
    });
  }
  fade(true); //fade elements on page-load
  $(window).scroll(function () {
    fade(false);
  }); //fade elements on scroll
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else if (currentScrollPos < 250) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
};

$(window).on("load", function () {
  document.getElementById("header").style.top = "0";
  resetHeaderDelay();
});

async function resetHeaderDelay() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  document.getElementById("header").style["transition-delay"] = "0s";
}
