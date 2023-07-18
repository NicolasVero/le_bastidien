// give_question.js
import { charger_json } from './load_json.js';

async function displayQuestions() {
    try {
        const all_questions = await charger_json();

        console.log(all_questions);
        document.getElementById("submit").addEventListener('click', () => {
            let value = document.getElementById("number").value;
            if(value >= all_questions.length)
                value = Math.floor(Math.random() * all_questions.length);

            document.getElementById("display").innerHTML = all_questions[value];
        });
    } catch (err) {
        console.error("Questions non reçues : " + err);
    }
}

displayQuestions();
