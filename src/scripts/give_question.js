// give_question.js
import { charger_json } from './load_json.js';

async function displayQuestions() {
    try {
        const all_questions = await charger_json();

        console.log(all_questions);
        document.getElementById("submit").addEventListener('click', () => {
            let value = document.getElementById("number").value;
            console.log(value)
            if(value > all_questions.length || value < 1 || value === '') {
                value = Math.floor((Math.random() * all_questions.length) + 1);
                console.log("Modif val : " + value)
            }

            document.getElementById("display").innerHTML = all_questions[value - 1];
        });
    } catch (err) {
        console.error("Questions non reçues : " + err);
    }
}

displayQuestions();
