function dropdown() {
  mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else if (currentScrollPos < 120) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
};

$(window).on("load", function () {
  document.getElementById("navbar").style.top = "0";
  resetHeaderDelay();
});

async function resetHeaderDelay() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  document.getElementById("navbar").style["transition-delay"] = "0s";
}
