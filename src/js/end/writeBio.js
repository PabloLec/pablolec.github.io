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
    if (dropdown) {
      dropdown.style.display = "none";
    }
  }
};

const questions = [
  `Qu'as-tu fait de ta vie ? `,
  `Depuis quand tu codes ?`,
  `Quelles technologies tu maîtrises ?`,
  `Quelle est ta formation ?`,
  `Et quelle serait ta compétence ?`,
  `Tu as déjà eu une expérience pro dans le dev ?`,
];
const responses = [
  `Je me suis engagé dans la Marine Nationale en tant que sous-officier à 18 ans après avoir passé un Bac S.
<br/>Ma spécialité, du moins au début, était l'exploitation et la maintenance des radars.
<br/>Dans ce cadre, j'ai passé 3 ans à bord de l'<a href="https://fr.wikipedia.org/wiki/Enseigne_de_vaisseau_Jacoubet" class="bio-link" target="_blank">Enseigne de vaisseau Jacoubet</a>.
<br/><br/>Puis, de nouveau 3 ans sur le <a href="https://fr.wikipedia.org/wiki/Forbin_(fr%C3%A9gate0)" class="bio-link" target="_blank">Forbin</a>, cette fois dans ce qu'on appelle la Guerre Électronique, il s'agit en gros d'intercepter toute sorte de signaux électromagnétiques (ex: un radar, une communication radio, un flux vidéo, etc.) et de l'identifier, le démoduler et/ou le déchiffrer.
<br/><br/>Ces années m'ont amené à effectuer de très nombreuses missions des États-Unis aux Émirats arabes unis en passant par l'Afrique de l'Ouest ou encore le Canal de Syrie.
<br/>Je totalise plus de 500 jours de mer dont plus de 150 en zone de guerre.
<br/>Un de mes points forts : Je n'ai pas le mal de mer. &#x1F912;
<br/><br/>Enfin, j'ai passé 3 ans à terre, affecté dans le milieu du renseignement.`,

  `C'est relativement récent, depuis 2018.
<br/>J'ai ceci dit toujours été "tech savvy", je me souviens en 2004 faire des sites hébergés sur  <a href="https://en.wikipedia.org/wiki/MSN_Groups" class="bio-link" target="_blank">MSN Groups</a>.
<br/><br/>Mark Zuckerberg a créé Facebook, la même année, je créais un fan site d'Eminem, il a seulement eu plus de chance. &#x1F937;&#x1F3FB;`,

  `Côté langage, j'ai démarré l'apprentissage de la programmation logicielle avec Python et c'est toujours mon langage de prédilection aujourd'hui.
<br/>Entre-temps, j'ai eu l'occasion de pratiquer d'autres langages comme le Shell, le Rust, le Go et surtout le JavaScript/TypeScript, particulièrement avec NodeJS.
<br/><br/>Évidemment, cela m'a amené à utiliser de nombreux frameworks. Du pur front-end, comme vous pouvez le voir ici-même, comme le back-end le plus obscur qui égraine mon GitHub et mes projets persos.
<br/><br/>Au passage, mon OS de tous les jours est Linux, je le pratique sous toutes ses formes, du classique Debian-like au plus minimal avec divers devices IoT.`,

  `Ma formation s'est faite de manière autodidacte et continue sur plusieurs années.
<br/>Cela peut avoir une connotation négative à l'oreille de certains, mais je tiens à confirmer qu'il s'agit plutôt d'un gage de passion et d'obstination.
<br/><br/>Plus récemment, j'ai suivi une formation diplômante via OpenClassrooms et son parcours "Développeur d'application - Python".
<br/>Cette formation m'a appris en particulier l'aspect professionnel du développement. La prise en compte de besoins clients, le respect du cahier des charges et l'agilité.
<br/><br/>Par ailleurs, j'ai fréquemment contribué à divers projets open source. Pour en savoir plus, je vous invite à consulter mon GitHub.`,

  `Si je devais résumer ma réelle compétence, c'est la curiosité et le désir de connaissance. J'aime la nouveauté et je ne rechigne pas devant la difficulté.
<br/>Je ne sais qu'une chose, c'est que je n'en connais pas assez.
<br/><br/>C'est donc avec intérêt que j'écoute et apprends, et avec ce même intérêt j'aime partager mes connaissances et rendre intelligible mon travail.
<br/>Dans ma vie professionnelle, j'ai naturellement été un élément moteur, j'aime proposer, innover et faire plus, faire mieux.`,

  `Pas encore.
<br/>Durant ma formation, effectuée en parallèle de mon activité militaire, il m'était impossible de me diriger vers l'alternance ou même un stage.
<br/>J'ai cependant pris soin de me renseigner sur la réalité du dev en entreprise. Que ce soit par de la connaissance générale via Internet ou de l'expérience réelle via mes connaissances travaillant dans le domaine.
<br/><br/>Je précise également que j'ai eu l'occasion de développer pour la Marine Nationale. Je ne peux malheureusement pas détailler ici, je le ferais avec plaisir en privé, mais il s'agit grossièrement d'un logiciel permettant de grandement faciliter le travail de mon unité de renseignement.
<br/>Par ailleurs, pour cela je me suis vu décerner une lettre de félicitations du Ministère des Armées. &#x1F396;
<br/><br/>Enfin, je prépare actuellement la certification de Professional Scrum Master 1.`,
];

var questionsList = questions;

function addQuestionMenu() {
  var messages = document.getElementById("messages");

  if (questionsList.length == 0) {
    messages.insertAdjacentHTML("beforeend", `<li class="message question">Ok. &#x1F44D;</li>`);
    return;
  }
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

  await new Promise((r) => setTimeout(r, 1200));

  for (const line of lines) {
    addTyping();
    await new Promise((r) => setTimeout(r, 2000));
    addAnswerMessage(line);
  }

  questionsList = questionsList.filter((e) => e !== questions[questionNum]);
  addQuestionMenu();
}

addQuestionMenu();
