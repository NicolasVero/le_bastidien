const [gear] = [
    document.querySelector('.gear')
  ];

  let rotation = 0; // Initialisez la rotation à 0 degrés

  gear.addEventListener('click', () => {
    rotation += 30;
    gear.style.transform = `rotate(${rotation}deg)`;
	gear.style.transition = ".5s";
  });

  // Fonction pour extraire l'angle de rotation actuel
  function getRotation(element) {
    const transformStyle = window.getComputedStyle(element).getPropertyValue('transform');
    const matrix = transformStyle.match(/^matrix\((.+)\)$/);

    if (matrix) {
      const values = matrix[1].split(', ');
      return Math.round(Math.atan2(parseFloat(values[1]), parseFloat(values[0])) * (180 / Math.PI));
    }

    return 0;
  }