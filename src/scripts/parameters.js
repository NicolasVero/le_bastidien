const [gear, parametres, get_json, vail] = [
	document.querySelector('.gear'),
	document.querySelector('#parametres'),
	document.querySelector('.get_json'),
	document.querySelector('#vail')
];

let rotation = 0;

gear.addEventListener('click', () => {
	rotation += 30;
	gear.style.transform = `rotate(${rotation}deg)`;
	gear.style.transition = ".5s";

	if (parametres.classList.contains("active")) {
		parametres.classList.remove('active');
		vail.classList.remove('active');
	} else {
		parametres.classList.add('active');
		vail.classList.add('active');
	}
});

get_json.addEventListener('click', () => {
	let password = prompt('Demande d\'accès aux questions');
	if(password === 'bastide')
		window.open("src/datas/datas.json","_blank", null);
});

//! a debuguer 
// window.addEventListener('click', (e) => {
// 	if (e.target !== parametres && e.target !== gear && document.contains(e.target)) {
// 		if (e.target.closest('.parametres') === parametres || parametres.contains(e.target)) {
// 			return;
// 		}
// 		parametres.classList.remove('active');
// 	}
// });