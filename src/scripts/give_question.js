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
// background: linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(255,253,245,1) 90%);          
                display_color.style.background = all_couleurs[value - 1];
                // display_color.style.background = "linear-gradient(180deg, " + all_couleurs[value - 1] + " 0%, rgba(255,253,245,1) 90%)";
                // display_color.style.background = "linear-gradient(331deg, rgba(255,253,245,1) 65%, " + all_couleurs[value - 1] + " 100%)";
                // document.querySelector('body').style.background = "linear-gradient(331deg, rgba(255,253,245,1) 65%, " + all_couleurs[value - 1] + " 100%)";
                // background: linear-gradient(331deg, rgba(255,253,245,1) 65%, rgba(255,0,0,1) 100%);
                display.innerHTML = all_questions[value - 1];
            }
        });
        
    } catch (err) {
        console.error("Questions non reçues : " + err);
    }
}

displayQuestions();
