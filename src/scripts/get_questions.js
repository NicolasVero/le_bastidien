import { charger_json } from './load_json.js';

async function get_questions() {
    try {
        const data_json     = await charger_json();
        const all_colors    = data_json[0];
        const all_questions = data_json[1];
    
        console.log(data_json);
        get_form_rows(data_json);
    }

    catch(err) {
        console.error(`Questions non reçues : ${err}`);
    }
}

function get_form_rows(data_json) {

    const display = document.querySelector('#update_form');
    data_json[1].forEach((data) => {
        console.log(data)

        display.innerHTML += '<div class="update_row">';
        display.innerHTML += '<input type="text" value="' + data[0] +'">';
        display.innerHTML += '<textarea type="text">' + data[1] + '</textarea>';
        display.innerHTML += '<input type="number" value="' + data[2] +'">';
        display.innerHTML += '</div>';
    });
}


get_questions();