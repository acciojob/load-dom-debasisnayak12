//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
	//DOM
	// Remove any existing child elements of the body tag
	document.body.innerHTML = '';
	const element = document.createElement('p');
	element.textContent = 'DOM load success';
	document.body.appendChild(element);
});
