
function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Success!  Kevin will get back to you shortly!");
}
let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);


function clickMe() {
	alert('You found a secret!  The secret word for today is "Charity"')
}
let picture = document.getElementById("picture2")
picture.addEventListener('click', clickMe)


function clickButton1() {
	alert('My favorite color is Black!')
}
let button1 = document.getElementById("color")
button1.addEventListener('click', clickButton1)


function clickButton2() {
	alert('My favorite place is at home with my family and friends!')
}
let button2 = document.getElementById("place")
button2.addEventListener('click', clickButton2)


function clickButton3() {
	alert('My favorite ritual is, getting ice cream after a visit to the doctors!')
}
let button3 = document.getElementById("ritual")
button3.addEventListener('click', clickButton3)