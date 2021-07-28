!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Typewriter",[],t):"object"==typeof exports?exports.Typewriter=t():e.Typewriter=t()}("undefined"!=typeof self?self:this,(function(){return(()=>{var e={75:function(e){(function(){var t,n,r,o,a,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-a)/1e6},n=process.hrtime,o=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),s=1e9*process.uptime(),a=o-s):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)},4087:(e,t,n)=>{for(var r=n(75),o="undefined"==typeof window?n.g:window,a=["moz","webkit"],s="AnimationFrame",i=o["request"+s],u=o["cancel"+s]||o["cancelRequest"+s],l=0;!i&&l<a.length;l++)i=o[a[l]+"Request"+s],u=o[a[l]+"Cancel"+s]||o[a[l]+"CancelRequest"+s];if(!i||!u){var c=0,p=0,d=[];i=function(e){if(0===d.length){var t=r(),n=Math.max(0,16.666666666666668-(t-c));c=n+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return d.push({handle:++p,callback:e,cancelled:!1}),p},u=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return i.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=i,e.cancelAnimationFrame=u}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var r={};return(()=>{"use strict";n.d(r,{default:()=>S});var e=n(4087),t=n.n(e);const o=function(e){return new RegExp(/<[a-z][\s\S]*>/i).test(e)},a=function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},s=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var i="TYPE_CHARACTER",u="REMOVE_CHARACTER",l="REMOVE_ALL",c="REMOVE_LAST_VISIBLE_NODE",p="PAUSE_FOR",d="CALL_FUNCTION",f="ADD_HTML_TAG_ELEMENT",v="CHANGE_DELETE_SPEED",h="CHANGE_DELAY",m="CHANGE_CURSOR",y="PASTE_STRING",g="HTML_TAG";function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const S=function(){function n(r,E){var b=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),N(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),N(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),N(this,"setupWrapperElement",(function(){b.state.elements.container&&(b.state.elements.wrapper.className=b.options.wrapperClassName,b.state.elements.cursor.className=b.options.cursorClassName,b.state.elements.cursor.innerHTML=b.options.cursor,b.state.elements.container.innerHTML="",b.state.elements.container.appendChild(b.state.elements.wrapper),b.state.elements.container.appendChild(b.state.elements.cursor))})),N(this,"start",(function(){return b.state.eventLoopPaused=!1,b.runEventLoop(),b})),N(this,"pause",(function(){return b.state.eventLoopPaused=!0,b})),N(this,"stop",(function(){return b.state.eventLoop&&((0,e.cancel)(b.state.eventLoop),b.state.eventLoop=null),b})),N(this,"pauseFor",(function(e){return b.addEventToQueue(p,{ms:e}),b})),N(this,"typeOutAllStrings",(function(){return"string"==typeof b.options.strings?(b.typeString(b.options.strings).pauseFor(b.options.pauseFor),b):(b.options.strings.forEach((function(e){b.typeString(e).pauseFor(b.options.pauseFor).deleteAll(b.options.deleteSpeed)})),b)})),N(this,"typeString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(o(e))return b.typeOutHTMLString(e,t);if(e){var n=b.options||{},r=n.stringSplitter,a="function"==typeof r?r(e):e.split("");b.typeCharacters(a,t)}return b})),N(this,"pasteString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return o(e)?b.typeOutHTMLString(e,t,!0):(e&&b.addEventToQueue(y,{character:e,node:t}),b)})),N(this,"typeOutHTMLString",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2?arguments[2]:void 0,r=a(e);if(r.length>0)for(var o=0;o<r.length;o++){var s=r[o],i=s.innerHTML;s&&3!==s.nodeType?(s.innerHTML="",b.addEventToQueue(f,{node:s,parentNode:t}),n?b.pasteString(i,s):b.typeString(i,s)):s.textContent&&(n?b.pasteString(s.textContent,t):b.typeString(s.textContent,t))}return b})),N(this,"deleteAll",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"natural";return b.addEventToQueue(l,{speed:e}),b})),N(this,"changeDeleteSpeed",(function(e){if(!e)throw new Error("Must provide new delete speed");return b.addEventToQueue(v,{speed:e}),b})),N(this,"changeDelay",(function(e){if(!e)throw new Error("Must provide new delay");return b.addEventToQueue(h,{delay:e}),b})),N(this,"changeCursor",(function(e){if(!e)throw new Error("Must provide new cursor");return b.addEventToQueue(m,{cursor:e}),b})),N(this,"deleteChars",(function(e){if(!e)throw new Error("Must provide amount of characters to delete");for(var t=0;t<e;t++)b.addEventToQueue(u);return b})),N(this,"callFunction",(function(e,t){if(!e||"function"!=typeof e)throw new Error("Callbak must be a function");return b.addEventToQueue(d,{cb:e,thisArg:t}),b})),N(this,"typeCharacters",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(e){b.addEventToQueue(i,{character:e,node:t})})),b})),N(this,"removeCharacters",(function(e){if(!e||!Array.isArray(e))throw new Error("Characters must be an array");return e.forEach((function(){b.addEventToQueue(u)})),b})),N(this,"addEventToQueue",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return b.addEventToStateProperty(e,t,n,"eventQueue")})),N(this,"addReverseCalledEvent",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=b.options.loop;return r?b.addEventToStateProperty(e,t,n,"reverseCalledEvents"):b})),N(this,"addEventToStateProperty",(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o={eventName:e,eventArgs:t||{}};return b.state[r]=n?[o].concat(T(b.state[r])):[].concat(T(b.state[r]),[o]),b})),N(this,"runEventLoop",(function(){b.state.lastFrameTime||(b.state.lastFrameTime=Date.now());var e=Date.now(),n=e-b.state.lastFrameTime;if(!b.state.eventQueue.length){if(!b.options.loop)return;b.state.eventQueue=T(b.state.calledEvents),b.state.calledEvents=[],b.options=w({},b.state.initialOptions)}if(b.state.eventLoop=t()(b.runEventLoop),!b.state.eventLoopPaused){if(b.state.pauseUntil){if(e<b.state.pauseUntil)return;b.state.pauseUntil=null}var r,o=T(b.state.eventQueue),a=o.shift();if(!(n<=(r=a.eventName===c||a.eventName===u?"natural"===b.options.deleteSpeed?s(40,80):b.options.deleteSpeed:"natural"===b.options.delay?s(120,160):b.options.delay))){var E=a.eventName,A=a.eventArgs;switch(b.logInDevMode({currentEvent:a,state:b.state,delay:r}),E){case y:case i:var N=A.character,S=A.node,C=document.createTextNode(N),_=C;b.options.onCreateTextNode&&"function"==typeof b.options.onCreateTextNode&&(_=b.options.onCreateTextNode(N,C)),_&&(S?S.appendChild(_):b.state.elements.wrapper.appendChild(_)),b.state.visibleNodes=[].concat(T(b.state.visibleNodes),[{type:"TEXT_NODE",character:N,node:_}]);break;case u:o.unshift({eventName:c,eventArgs:{removingCharacterNode:!0}});break;case p:var O=a.eventArgs.ms;b.state.pauseUntil=Date.now()+parseInt(O);break;case d:var L=a.eventArgs,D=L.cb,M=L.thisArg;D.call(M,{elements:b.state.elements});break;case f:var x=a.eventArgs,P=x.node,R=x.parentNode;R?R.appendChild(P):b.state.elements.wrapper.appendChild(P),b.state.visibleNodes=[].concat(T(b.state.visibleNodes),[{type:g,node:P,parentNode:R||b.state.elements.wrapper}]);break;case l:var j=b.state.visibleNodes,k=A.speed,Q=[];k&&Q.push({eventName:v,eventArgs:{speed:k,temp:!0}});for(var F=0,H=j.length;F<H;F++)Q.push({eventName:c,eventArgs:{removingCharacterNode:!1}});k&&Q.push({eventName:v,eventArgs:{speed:b.options.deleteSpeed,temp:!0}}),o.unshift.apply(o,Q);break;case c:var I=a.eventArgs.removingCharacterNode;if(b.state.visibleNodes.length){var U=b.state.visibleNodes.pop(),q=U.type,G=U.node,Y=U.character;b.options.onRemoveNode&&"function"==typeof b.options.onRemoveNode&&b.options.onRemoveNode({node:G,character:Y}),G&&G.parentNode.removeChild(G),q===g&&I&&o.unshift({eventName:c,eventArgs:{}})}break;case v:b.options.deleteSpeed=a.eventArgs.speed;break;case h:b.options.delay=a.eventArgs.delay;break;case m:b.options.cursor=a.eventArgs.cursor,b.state.elements.cursor.innerHTML=a.eventArgs.cursor}b.options.loop&&(a.eventName===c||a.eventArgs&&a.eventArgs.temp||(b.state.calledEvents=[].concat(T(b.state.calledEvents),[a]))),b.state.eventQueue=o,b.state.lastFrameTime=e}}})),r)if("string"==typeof r){var A=document.querySelector(r);if(!A)throw new Error("Could not find container element");this.state.elements.container=A}else this.state.elements.container=r;E&&(this.options=w(w({},this.options),E)),this.state.initialOptions=w({},this.options),this.init()}var r,E;return r=n,(E=[{key:"init",value:function(){var e,t;this.setupWrapperElement(),this.addEventToQueue(m,{cursor:this.options.cursor},!0),this.addEventToQueue(l,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(e=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(t=document.createElement("style")).appendChild(document.createTextNode(e)),document.head.appendChild(t),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),!0===this.options.autoStart&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(e){this.options.devMode&&console.log(e)}}])&&A(r.prototype,E),n}()})(),r.default})()}));

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
  `Qu'est-ce que tu as fait de ta vie ?`,
  `Depuis quand tu codes ?`,
  `Quelles technologies tu maîtrises ?`,
  `Quelle est ta formation ?`,
  `Bon, et quelle serait ta compétence ?`,
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

  `Côté language, j'ai démarré l'apprentissage de la programmation logicielle avec Python et c'est toujours mon langage de prédilection aujourd'hui.
<br/>Entre-temps, j'ai eu l'occasion de pratiquer d'autres langages comme le Shell, le Rust, le Go et surtout le JavaScript/TypeScript, particulièrement avec NodeJS.
<br/><br/>Évidemment, cela m'a amené à utiliser de nombreux frameworks. Du pur front-end, comme vous pouvez le voir ici-même, comme le back-end le plus obscur qui égraine mon GitHub et mes projets persos.
<br/><br/>Mon OS de tous les jours est Linux, je le pratique sous toutes ses formes, du plus simple avec Ubuntu au plus minimal avec divers devices IoT.`,

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

document.getElementById("face-link").addEventListener("click", async function (e) {
  e.stopPropagation();
  e.preventDefault();

  document.getElementById("container3d").style.display = "block";
  document.getElementById("main").classList.add("is-blurred");
  document.getElementById("navbar").classList.add("is-blurred");
  document.getElementById("link-list").classList.add("is-blurred");
  document.getElementById("face-wrapper").classList.add("is-blurred");

  if (!document.querySelector("#face-loaded")) {
    document.getElementById("lds-wrapper").style.display = "block";
    await loadFaceScript();
    document.getElementById("lds-wrapper").style.display = "none";
  }
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

const spans = document.querySelectorAll('#name-container h1 span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
});

async function firstLetterAnimation() {
	await new Promise(r => setTimeout(r, 2000));
	spans[0].classList.add('active')
}

firstLetterAnimation()
