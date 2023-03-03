console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submited, Thanks for reaching out!");
}

let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);


function quackAlert() {
	alert("Quack quack! You're a cutie!")
}

let picture = document.getElementById("picture")
picture.addEventListener('mouseover', quackAlert)