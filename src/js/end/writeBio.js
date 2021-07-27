function getIGDate() {
  today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = "1914";

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  document.getElementById("IG-date").textContent = dd + "/" + mm + "/" + yyyy;
}

function calculateAge() {
  // birthday is a date
  let ageDifMs = Date.now() - Date.parse("16 Jul 1993 00:00:00 GMT");
  let ageDate = new Date(ageDifMs);
  let age = Math.abs(ageDate.getUTCFullYear() - 1970);
  document.getElementById("my-age").textContent = age;
}

calculateAge();
getIGDate();

// - - - - - - - - - - - - - - - - - - - - -

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches("#question-menu") || !event.target.matches("#dropdown-menu")) {
    var dropdown = document.getElementById("dropdown-menu");
    dropdown.style.display = "none";
  }
};

const questions = [
  "Qu'est-ce que tu as fait de ta vie ?",
  "Mais dis donc, c'est super mais c'est quoi le rapport avec la programmation ?",
  "Et donc, qu'est-ce que tu sais faire ?",
];
const responses = [
  `Je suis devenu militaire à 18 ans après avoir passé un Bac S, je me suis engagé dans la Marine Nationale en tant que sous-officier.
<br/><br/>Je me suis spécialisé, du moins au début, dans les radars.
<br/>Puis, dans ce qu'on appelle la Guerre Électronique, il s'agit en gros d'intercepter toutes sortes de signaux électromagnétiques (ex: un radar, une communication radio, un flux vidéo, etc.) et de l'exploiter, c'est-à-dire l'identifier et dans la mesure du possible le démoduler et/ou le déchiffrer.
<br/>Enfin, j'ai travaillé quelques années dans le renseignement.
<br/><br/>J'ai très tôt eu des équipes à gérer et j'ai toujours eu à coeur de former mes équipiers de manière efficace et optimale.
<br/>J'ai passé 3 ans dans l'équipage de l'<a href="https://fr.wikipedia.org/wiki/Enseigne_de_vaisseau_Jacoubet" class="bio-link" target="_blank">Enseigne de vaisseau Jacoubet</a> puis de nouveau 3 ans sur le <a href="https://fr.wikipedia.org/wiki/Forbin_(fr%C3%A9gate0)" class="bio-link" target="_blank">Forbin</a>.
<br/>Ces années m'ont amené à effectuer de très nombreuses missions des États-Unis aux Émirats arabes unis en passant par l'Afrique de l'Ouest ou encore le Canal de Syrie.
<br/>Je totalise plus de 500 jours de mer dont plus de 150 en zone de guerre.
<br/>Un de mes points forts : Je n'ai pas le mal de mer.
`,
];

var questionsList = questions;

function addQuestionMenu() {
  var messages = document.getElementById("messages");
  messages.insertAdjacentHTML(
    "beforeend",
    `<li class="message question" id="question-menu">Posez moi une question !
<div id='dropdown-menu'></div></li>`
  );

  var menu = document.getElementById("question-menu");

  var dropdown = document.getElementById("dropdown-menu");

  for (const [i, q] of questions.entries()) {
    if (!questionsList.includes(q)) {
      continue;
    }
    content = `<a class="question-line" id="q` + i + `">` + q + `</a>`;
    dropdown.insertAdjacentHTML("beforeend", content);
    document.getElementById("q" + i).addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      menu.removeAttribute("id");
      menu.innerHTML = "";
      askQuestion(i, menu);
    });
  }

  menu.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    var dropdown = document.getElementById("dropdown-menu");
    dropdown.style.display = "block";
  });
}

function askQuestion(questionNum, menu) {
  writeQuestion(questionNum, menu);
}

function writeQuestion(questionNum, menu) {
  var typewriter = new Typewriter(menu, {
    loop: false,
    delay: 35,
  });

  typewriter.typeString(questions[questionNum]);

  typewriter.start();
  typewriter.callFunction(() => {
    typewriter.stop();
    for (const cursor of document.getElementsByClassName("Typewriter__cursor")) {
      cursor.style.display = "none";
    }

    writeAnswer(questionNum);
  });
}

function addAnswerMessage(message) {
  messBox = document.getElementById("messages");
  message = `<li class="message answer">` + message + `</li>`;
  removeTyping();
  messBox.insertAdjacentHTML("beforeend", message);
}

function addTyping() {
  messBox = document.getElementById("messages");
  message = `<li class="message answer" id="typing">...</li>`;
  messBox.insertAdjacentHTML("beforeend", message);
}

function removeTyping() {
  typing = document.getElementById("typing");
  typing.parentNode.removeChild(typing);
}

async function writeAnswer(questionNum) {
  var answer = responses[questionNum];

  var lines = answer.split("<br/><br/>");

  for (const line of lines) {
    addTyping();
    await new Promise((r) => setTimeout(r, 2000));
    addAnswerMessage(line);
  }

  questionsList = questionsList.filter((e) => e !== questions[questionNum]);
  addQuestionMenu();
}

addQuestionMenu();
