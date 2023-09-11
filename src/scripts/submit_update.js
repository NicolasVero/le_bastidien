document.addEventListener('DOMContentLoaded', () => {
    const updateButton = document.getElementById('updateButton');
    updateButton.addEventListener('click', () => {
        // Fonction de mise à jour du fichier JSON
        updateJSON();
    });
});


function updateJSON() {
    // Récupérez les données du formulaire
    const updateRows = document.querySelectorAll('.update_row');
    const updatedQuestions = [];

    updateRows.forEach((row) => {
        const titleInput = row.querySelector('input[type="text"]');
        const textArea = row.querySelector('textarea');
        const noteInput = row.querySelector('input[type="number"]');
        
        if (titleInput && textArea && noteInput) {
            const updatedQuestion = {
                titre: titleInput.value,
                texte: textArea.value,
                note: parseInt(noteInput.value)
            };
        
            updatedQuestions.push(updatedQuestion);
        } else {
            console.error('Certains éléments n\'ont pas été trouvés.');
        }
    });

    // Mettez à jour les données JSON
    const updatedData = {
        questions: updatedQuestions,
        // couleurs: data_json.couleurs // Gardez les couleurs inchangées
    };

    // Envoyez les données mises à jour au serveur ou faites ce que vous voulez avec elles
    // Vous pouvez utiliser fetch() ou une autre méthode pour envoyer les données au serveur.

    // Exemple de code pour envoyer les données au serveur avec fetch :
    fetch('src/datas/datas.json', {
        method: 'POST', // ou 'PUT' selon votre besoin
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    })
    .then((response) => {
        if (response.ok) {
            console.log('Les modifications ont été enregistrées avec succès.');
        } else {
            console.error('Erreur lors de l\'enregistrement des modifications.');
        }
    })
    .catch((error) => {
        console.error('Erreur lors de la communication avec le serveur :', error);
    });
}
