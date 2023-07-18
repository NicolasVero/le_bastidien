export function charger_json() {
    return fetch('src/datas/datas.json')
        
    .then(response => response.json())
        .then(jsonData => {

            let questions = [];
            let couleurs = [];

            for (let i = 0; i < jsonData.questions.length; i++) {
                couleurs.push(jsonData.couleurs[i].couleur);
                questions.push(jsonData.questions[i].texte);
            }
            
            return [couleurs, questions];
        })
        .catch(err => {
            console.error('Erreur lors du chargement ou parsing JSON :', err);
            throw err;
        });
}