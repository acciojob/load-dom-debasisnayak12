//your JS code here. If required.
window.addEventListener('DOMContentLoaded', () => {
	const bodyChildren = document.body.children;
	if(bodyChildren.lenght > 0){
		while(bodyChildren.length >0){
			document.body.removeChild(bodyChildren[0]);
		}
	}
	//DOM
	// Remove any existing child elements of the body tag
	document.body.innerHTML = '';
	const element = document.createElement('p');
	element.textContent = 'DOM load success';
	document.body.appendChild(element);
});
