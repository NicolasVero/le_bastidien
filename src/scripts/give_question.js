import { charger_json } from './load_json.js';

async function displayQuestions() {
    try {
        const data_json     = await charger_json();
        const all_couleurs  = data_json[0];
        const all_questions = data_json[1];

        const [number, submit, display_color, display, shuffle] = [
            document.getElementById("number"), 
            document.getElementById("submit"), 
            document.getElementById("display-color"),
            document.getElementById("display"),
            document.querySelector('.shuffle')
        ];

        shuffle.addEventListener('click', () => {
            shuffle_questions(all_questions)
        });

        number.addEventListener('click', () => {
            number.value = '';
        });

        submit.addEventListener('click', () => {

            let value = number.value;
            console.log(value)
            
            if(value === '90') value = 87;
            if(value === '87') value = 90;
            
            if(value !== '' && value <= all_questions.length && value > 0 ) {  

                let carte = document.querySelector('.carte');
                if (carte.classList.contains('not-show')) 
                    carte.classList.remove('not-show');

                display_color.style.background = all_couleurs[value - 1];
                display_color.innerHTML = '';

                for(let i = 0; i < all_questions[value - 1][2]; i++) 
                    display_color.innerHTML += '<i class="fa-solid fa-star"></i>';
                
                display.innerHTML = "<h2>" + all_questions[value - 1][0] + "<h2>";
                display.innerHTML += all_questions[value - 1][1];
            }
        });
        
    } catch (err) {
        console.error("Questions non reçues : " + err);
    }
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
