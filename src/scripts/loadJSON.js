function chargerJSON() {
    fetch('src/datas/questions.json')
        .then(response => response.json())
        .then(jsonData => {

            console.log(jsonData);

            for(let i = 0; i < jsonData.questions.length; i++) {
                document.getElementById("display").innerHTML += i + " : " + jsonData.questions[i].texte + "<br>";
            }
        })
        .catch(err => {
            console.error('Erreur lors du chargement ou parsing JSON :', err);
        });
}

chargerJSON();