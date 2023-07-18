export function charger_json() {
    return fetch('src/datas/questions.json')
        
    .then(response => response.json())
        .then(jsonData => {

            let questions = [];

            for (let i = 0; i < jsonData.questions.length; i++) 
                questions.push(jsonData.questions[i].texte);
            
            return questions;
        })
        .catch(err => {
            console.error('Erreur lors du chargement ou parsing JSON :', err);
            throw err;
        });
}