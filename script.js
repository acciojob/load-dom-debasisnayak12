//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
	const bodyContent = document.querySelector("body");
	if(bodyContent.hasChildNodes()){
		bodyContent.innerHTML = '';
	}

    const element = document.createTextNode("DOM load success");
	bodyContent.appendChild(element);
});
