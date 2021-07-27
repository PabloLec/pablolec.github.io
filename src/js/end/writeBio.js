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
  if (!event.target.matches("#question-menu") || event.target.matches("#dropdown-menu")) {
    var dropdown = document.getElementById("dropdown-menu");
    dropdown.style.display = "none";
  }
};

var questionMenuContent = `Posez moi une question !
<div id='dropdown-menu'>
<a class="question-line" id="q1">Qu'est-ce que tu as fait de ta vie ?</a>
<br/>
<a class="question-line" id="q2">Mais dis donc, c'est super mais c'est quoi le rapport avec la programmation ?</a>
<br/>
<a class="question-line" id="q3">Et donc, qu'est-ce que tu sais faire ?</a>
</div>
`;

function addQuestionMenu() {
  var menu = document.getElementById("question-menu");
  menu.innerHTML = questionMenuContent;

  menu.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    var dropdown = document.getElementById("dropdown-menu");
    dropdown.style.display = "block";
  });

  var question1 = document.getElementById("q1");
  var question2 = document.getElementById("q2");
  var question3 = document.getElementById("q3");

  question1.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    askQuestion(1);
  });
  question2.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    askQuestion(1);
  });
  question3.addEventListener("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    askQuestion(1);
  });
}

function askQuestion(questionNum) {
  writeQuestion(questionNum);
}

function writeQuestion(questionNum) {
  var dropdown = document.getElementById("dropdown-menu");
  dropdown.style.display = "none";
  var menu = document.getElementById("question-menu");
  menu.innerHTML = "";

  var typewriter = new Typewriter(menu, {
    loop: false,
    delay: 16,
  });

  if (questionNum == 1) {
    typewriter.typeString("Qu'est-ce que tu as fait de ta vie ?");
  }

  typewriter.start();
}

addQuestionMenu();
