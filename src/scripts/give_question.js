import { charger_json } from './load_json.js';

async function displayQuestions() {
    try {
        const data_json = await charger_json();
        const all_couleurs = data_json[0];
        const all_questions = data_json[1];

        const [number, submit, display_color, display] = [
            document.getElementById("number"), 
            document.getElementById("submit"), 
            document.getElementById("display-color"),
            document.getElementById("display")
        ];

        number.addEventListener('click', () => {
            number.value = '';
        });

        submit.addEventListener('click', () => {
            let value = number.value;
            if(value !== '' && value <= all_questions.length && value > 0) {              
                display_color.style.background = all_couleurs[value - 1];
                display.innerHTML = all_questions[value - 1];
            }
        });
        
    } catch (err) {
        console.error("Questions non reçues : " + err);
    }
}

displayQuestions();
