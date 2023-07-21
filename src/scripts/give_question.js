import { charger_json } from './load_json.js';

async function displayQuestions() {
    try {
        const data_json     = await charger_json();
        const all_colors    = data_json[0];
        const all_questions = data_json[1];

        const [number, submit, display_color, display, shuffle] = [
            document.getElementById('number'       ), 
            document.getElementById('submit'       ), 
            document.getElementById('display-color'),
            document.getElementById('display'      ),
            document.querySelector ('.shuffle'     )
        ];

        shuffle.addEventListener('click', () => {
            shuffle_questions(all_questions);
            shuffle.classList.add('show-message');

            setTimeout(() => {
                shuffle.classList.remove('show-message');
            }, 3000);
        });

        number.addEventListener('click', () => {
            number.value = '';
        });

        submit.addEventListener('click', () => {

            let value = number.value;
            
            if(value === '90') value = 87;
            if(value === '87') value = 90;
            
            if(value !== '') {
                let color    = '#73151E';
                let title    = 'Perdus';
                let question = 'Vous vous êtes trop éloignés du village et vous vous êtes perdus... En attendant que le jour se lève, un shot chacun, ça vous réchauffera.';
                let stars    = 3;

                if(value <= all_questions.length && value > 0 ) { 
                    color    = all_colors[value - 1];
                    title    = all_questions[value - 1][0];
                    question = all_questions[value - 1][1];
                    stars    = all_questions[value - 1][2];
                }

                let card = document.querySelector('.card');
                if (card.classList.contains('not-show')) 
                    card.classList.remove('not-show');

                display_color.style.background = color;
                display_color.innerHTML = '';

                const star_style = get_stars_exception(value);

                for(let i = 0; i < stars; i++) 
                    display_color.innerHTML += '<i class="fa-solid fa-star" ' + star_style + '></i>';
                
                display.innerHTML = '<h2>' + title + '<h2>';
                display.innerHTML += question;
            }
        });
        
    } catch (err) {
        console.error(`Questions non reçues : ${err}`);
    }
}

function get_stars_exception(value) {
    const excepts_light = [16, 37, 52];
    const excepts_dark  = [25, 33, 50, 60];

    if (document.querySelector('body').classList.contains('light')) 
        if (isInArray(parseInt(value), excepts_light)) 
            return 'style="color: #000000"';
          
    if (document.querySelector('body').classList.contains('dark')) 
        if (isInArray(parseInt(value), excepts_dark)) 
            return 'style="color: #FFFFFF"';

    return '';
}

function isInArray(value, array) {
    return array.indexOf(value) !== -1;
}

function shuffle_questions(questions) {
    var j = 0;
    var valI = '';
    var valJ = valI;
    var l = questions.length - 1;
    while(l > -1) {
		j = Math.floor(Math.random() * l);
		valI = questions[l];
		valJ = questions[j];
		questions[l] = valJ;
		questions[j] = valI;
		l = l - 1;
	}
    return questions;
}

displayQuestions();
