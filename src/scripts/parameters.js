const [gear] = [
    document.querySelector('.gear')
];

gear.addEventListener('click', () => {
    let rotation = getRotation(gear);
    console.log(rotation);

    rotation = (rotation + 30) % 360;
    gear.style.transform = `rotate(${rotation}deg)`;
    gear.style.transition = ".5s";
});


function getRotation(element) {
	const transformStyle = window.getComputedStyle(element).getPropertyValue('transform');
	const matrix = transformStyle.match(/^matrix\((.+)\)$/);

    if (matrix) {
		const values = matrix[1].split(', ');
		return Math.round(Math.atan2(parseFloat(values[1]), parseFloat(values[0])) * (180 / Math.PI));
    }

    return 0;
  }