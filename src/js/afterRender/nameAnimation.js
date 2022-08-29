classList = ["bg-hero-lips", "bg-hero-bank-note", "bg-hero-signal", "bg-hero-yyy"];

if (window.screen.width > 768) {
  classList.push("bg-hero-circuit-board", "bg-hero-lines-in-motion");
}

document.getElementById("name-hero").className = classList[Math.floor(Math.random() * classList.length)];
// console.log("name-hero class: " + document.getElementById("name-hero").className);
