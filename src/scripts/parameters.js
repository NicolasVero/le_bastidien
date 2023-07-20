const [gear, parameters, get_json, swicth_theme, vail] = [
	document.querySelector('.gear'        ),
	document.querySelector('#parameters'  ),
	document.querySelector('.get_json'    ),
	document.querySelector('.swicth_theme'),
	document.querySelector('#vail'        )
];

let rotation = 0;

gear.addEventListener('click', () => {
	rotation += 30;
	gear.style.transform = `rotate(${rotation}deg)`;
	gear.style.transition = ".5s";

	if (parameters.classList.contains('active')) {
		parameters.classList.remove('active');
		vail.classList.remove('active');
	} else {
		parameters.classList.add('active');
		vail.classList.add('active');
	}
});

get_json.addEventListener('click', () => {
	let password = prompt('Demande d\'accès aux questions');
	if(password === 'Amelie')
		window.open('src/datas/datas.json','_blank', null);
});

swicth_theme.addEventListener('click', () => {
	const body = document.querySelector('body');

	if(body.classList.contains('light')) {
		body.classList.remove('light');
		body.classList.add('dark');
	} else {
		body.classList.add('light');
		body.classList.remove('dark');
	}
});