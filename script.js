//your JS code here. If required.
window.addEventListener('DOMContentLoaded', () => {
	//DOM
	// Remove any existing child elements of the body tag
	document.body.innerHTML = '';
	//create element
	const element = document.createElement('p');
	element.textContent = 'DOM load success';
	document.body.appendChild(element);
});
