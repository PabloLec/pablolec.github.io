classList = ["bg-hero-lips", "bg-hero-bank-note", "bg-hero-yyy"];

if (window.screen.width > 768) {
  classList.push("bg-hero-lines-in-motion");
}

document.getElementById("name-hero").className = classList[Math.floor(Math.random() * classList.length)];
