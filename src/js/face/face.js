const app = new SpeRuntime.Application();
app.start("/src/scene/scene.json");
var elem = document.createElement("div");
elem.style.cssText = "width:0%;height:0%;display:none";
elem.setAttribute("id", "face-loaded");
document.body.appendChild(elem);