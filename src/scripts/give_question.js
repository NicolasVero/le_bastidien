import { charger_json } from './load_json.js';

async function displayQuestions() {
    try {
        const data_json     = await charger_json();
        const all_couleurs  = data_json[0];
        const all_questions = data_json[1];
        console.log(all_questions)

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
        console.log(all_questions)

            let value = number.value;
            if(value !== '' && value <= all_questions.length && value > 0) {    
                display_color.style.background = all_couleurs[value - 1];
                
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
