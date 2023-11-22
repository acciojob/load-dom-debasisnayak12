//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector("body");
	if(body.hasChildNodes()){
		body.innerHTML = '';
	}

	const element = document.createElements("p");
	element.textContent = "DOM load success";

	body.appendChild(element);
});
