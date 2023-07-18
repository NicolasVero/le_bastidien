function chargerJSON() {
    fetch('src/datas/questions.json')
        .then(response => response.json())
        .then(jsonData => {

            console.log(jsonData);
        })
        .catch(err => {
            console.error('Erreur lors du chargement ou parsing JSON :', err);
        });
}

chargerJSON();