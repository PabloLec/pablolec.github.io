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
