//your JS code here. If required.
window.addEventListener('DOMContentLoaded', () => {
	const bodyChild = document.body.children;
	if(bodyChild.lenght > 0){
		while(bodyChild.length >0){
			document.body.removeChild(bodyChild[0]);
		}
	}
	//DOM
	// Remove any existing child elements of the body tag
	document.body.innerHTML = '';
	const element = document.createElement('p');
	element.textContent = 'DOM load success';
	document.body.appendChild(element);
});
