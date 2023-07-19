const [gear, parametres] = [
    document.querySelector('.gear'),
    document.querySelector('#parametres'),
];

let rotation = 0;

gear.addEventListener('click', () => {
	rotation += 30;
	gear.style.transform = `rotate(${rotation}deg)`;
	gear.style.transition = ".5s";

	if (parametres.classList.contains("active"))
		parametres.classList.remove('active');
	else
		parametres.classList.add('active');
});

