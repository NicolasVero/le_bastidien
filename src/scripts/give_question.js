import { charger_json } from './load_json.js';

async function displayQuestions() {
    try {
        const all_questions = await charger_json();
        const [number, submit, display] = [
            document.getElementById("number"), 
            document.getElementById("submit"), 
            document.getElementById("display")
        ];

        number.addEventListener('click', () => {
            number.value = '';
        });

        submit.addEventListener('click', () => {
            let value = number.value;

            if(value > all_questions.length || value < 1 || value === '') 
                value = Math.floor((Math.random() * all_questions.length) + 1);
            
            display.innerHTML = all_questions[value - 1];
        });
        
    } catch (err) {
        console.error("Questions non reçues : " + err);
    }
}

displayQuestions();
