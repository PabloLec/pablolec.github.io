document.getElementById("face-link").addEventListener("click", async function (e) {
  e.stopPropagation();
  e.preventDefault();

  document.getElementById("container3d").style.display = "block";
  document.getElementById("main").classList.add("is-blurred");
  document.getElementById("navbar").classList.add("is-blurred");
  document.getElementById("link-list").classList.add("is-blurred");
  document.getElementById("face-wrapper").classList.add("is-blurred");

  while (!document.querySelector("#face-loaded")) {
    document.getElementById("lds-wrapper").style.display = "block";
    await new Promise((r) => setTimeout(r, 500));
  }
  document.getElementById("lds-wrapper").style.display = "none";

  _paq.push(["trackEvent", "Click", "Button Click", "Face Modal"]);
});

document.getElementById("face-close").addEventListener("click", function (e) {
  e.stopPropagation();
  e.preventDefault();
  document.getElementById("container3d").style.display = "none";
  document.getElementById("main").classList.remove("is-blurred");
  document.getElementById("navbar").classList.remove("is-blurred");
  document.getElementById("link-list").classList.remove("is-blurred");
  document.getElementById("face-wrapper").classList.remove("is-blurred");
});

async function loadFaceScript() {
  let script = document.createElement("script");
  script.setAttribute("src", "/src/js/faceApp.min.js");
  script.setAttribute("async", "false");
  let head = document.head;
  head.insertBefore(script, head.firstElementChild);

  while (!document.querySelector("#face-loaded")) {
    await new Promise((r) => setTimeout(r, 500));
  }
}

loadFaceScript();
