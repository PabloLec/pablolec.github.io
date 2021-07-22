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

function typeBio1() {
	let bio = document.getElementById('bio1');

	var typewriter = new Typewriter(bio, {
	    loop: false,
	    delay: 40,
	});

	let content =`Je suis devenu militaire à 18 ans après avoir passé un Bac S, je me suis engagé dans la Marine Nationale en tant que sous-officier.
	<br/><br/>Je me suis spécialisé, du moins au début, dans les radars. 
	<br/>Puis, dans ce qu'on appelle la Guerre Electronique, il s'agit en gros d'intercepter toutes sortes de signaux électromagnétiques (ex: un radar, une communication radio, un flux vidéo, etc.) et de l'exploiter, c'est-à-dire l'identifier et dans la mesure du possible le démoduler et/ou le déchiffrer.
	<br/>Enfin, j'ai travaillé quelques années dans le renseignement.

	<br/><br/>J'ai très tôt eu des équipes à gérer et j'ai toujours eu à coeur de former mes équipiers de manière efficace et optimale.
	<br/>J'ai passé 3 ans dans l'équipage de l'<a href="https://fr.wikipedia.org/wiki/Enseigne_de_vaisseau_Jacoubet" class="bio-link" target="_blank">Enseigne de vaisseau Jacoubet</a> puis de nouveau 3 ans sur le <a href="https://fr.wikipedia.org/wiki/Forbin_(fr%C3%A9gate0)" class="bio-link" target="_blank">Forbin</a>.
	<br/>Ces années m'ont amenées à effectuer de très nombreuses missions des États-Unis aux Émirats arabes unis en passant par l'Afrique de l'Ouest ou encore le Canal de Syrie.
	<br/>Je totalise plus de 500 jours de mer dont plus de 150 en zone de guerre.
	<br/>Un de mes points forts : Je n'ai pas le mal de mer.
	`

	var lines = content.split("<br/>")

	lines.forEach(function(line, index)  {
	  if (line.includes(",")) {
	  	  var parts = line.split(",");
		  parts.forEach(function(part, index) {
		    typewriter.typeString(part);
		    if (index < parts.length - 1) {
		     typewriter.typeString(",");
		     typewriter.pauseFor(250);
		    }
		  })
	  }
	  else {
	  	typewriter.typeString(line);
	  }
	  
	  typewriter.typeString("<br/>");
	  if (line.length > 0) {
	    typewriter.pauseFor(500);
	  }
	  
	})

	typewriter.start();
	typewriter.callFunction(() => {
      document.getElementById("bio-cat2").style.display = "block";
    });
}

function typeBio2() {
	let bio = document.getElementById('bio2');

	var typewriter = new Typewriter(bio, {
	    loop: false,
	    delay: 40,
	});

	let content =`Et bien, il n'y en a pas beaucoup effectivement.
	<br/>J'ai ceci dit toujours été "tech savvy", je me souviens en 2004 faire des sites hébergés sur <a href="https://en.wikipedia.org/wiki/MSN_Groups" class="bio-link" target="_blank">MSN Groups </a>. Mark Zuckerberg a créé Facebbok, la même année je créais un fan site d'Eminem, il a seuleument eu plus de chance.
	<br/>Plus récemment, et de manière un plus sérieuse, j'ai eu l'occasion d'allier programmation et mon travail du quotidien. Et ce, dans mon affectation renseignement, chose sur laquelle je ne peux m'étaler ici, je peux cependant détailler en privé !
	`

	var lines = content.split("<br/>")

	lines.forEach(function(line, index)  {
	  if (line.includes(",")) {
	  	  var parts = line.split(",");
		  parts.forEach(function(part, index) {
		    typewriter.typeString(part);
		    if (index < parts.length - 1) {
		     typewriter.typeString(",");
		     typewriter.pauseFor(250);
		    }
		  })
	  }
	  else {
	  	typewriter.typeString(line);
	  }
	  
	  typewriter.typeString("<br/>");
	  if (line.length > 0) {
	    typewriter.pauseFor(500);
	  }
	  
	})

	typewriter.start();
	typewriter.callFunction(() => {
      document.getElementById("bio-cat3").style.display = "block";
    });
}

function typeBio3() {
	let bio = document.getElementById('bio3');

	var typewriter = new Typewriter(bio, {
	    loop: false,
	    delay: 40,
	});

	let content =`J'ai démarré l'apprentissage de la programmation logicielle avec Python, et c'est toujours mon langage de prédiliction aujourd'hui.
	<br/>Entre-temps, j'ai eu l'occasion de pratiquer d'autres langages comme le Java, le Rust, le Go et surtout le JavaScript/TypeScript, particulièrement avec NodeJS.
	<br/><br/>Ma formation s'est faite de manière autodidacte et continue sur plusieurs années.
	<br/>Par la suite, j'ai suivi une formation diplômante via OpenClassrooms et son parcours "Développeur d'application - Python".
	<br/>Cette formation m'a appris en particulier l'aspect professionel du développement. La prise en compte de besoins clients, le respect du cahier des charges et l'agilité.
	<br/>Par ailleurs, j'ai fréquemment contribué à divers projets open source. Pour en savoir plus, je vous invite à consulter mon GitHub.
	<br/><br/>Si je devais résumer ma réelle compétence, c'est la curiosité et le désir de connaissance. J'aime la nouveauté et je ne rechigne pas devant la difficulté.
	<br/>Je ne sais qu'une chose, c'est que je n'en connais pas assez. 
	<br/>C'est donc avec intérêt que j'écoute et apprends, et avec ce même intérêt j'aime partager mes connaissances et rendre intelligible mon travail.
	`

	var lines = content.split("<br/>")

	lines.forEach(function(line, index)  {
	  if (line.includes(",")) {
	  	  var parts = line.split(",");
		  parts.forEach(function(part, index) {
		    typewriter.typeString(part);
		    if (index < parts.length - 1) {
		     typewriter.typeString(",");
		     typewriter.pauseFor(250);
		    }
		  })
	  }
	  else {
	  	typewriter.typeString(line);
	  }
	  
	  typewriter.typeString("<br/>");
	  if (line.length > 0) {
	    typewriter.pauseFor(500);
	  }
	  
	})

	typewriter.start();
}

var bioCat1Loaded = false;
var bioCat2Loaded = false;
var bioCat3Loaded = false;

document.getElementById("bio-cat1").addEventListener("click", function (e) {
	  e.stopPropagation();
	  e.preventDefault();
	  if (!bioCat1Loaded) {
	    typeBio1();
	    bioCat1Loaded = true;
	  }
	}
)

document.getElementById("bio-cat2").addEventListener("click", function (e) {
	  e.stopPropagation();
	  e.preventDefault();
	  if (!bioCat2Loaded) {
	    typeBio2();
	    bioCat2Loaded = true;
	  }
	}
)

document.getElementById("bio-cat3").addEventListener("click", function (e) {
	  e.stopPropagation();
	  e.preventDefault();
	  if (!bioCat3Loaded) {
	    typeBio3();
	    bioCat3Loaded = true;
	  }
	}
)

