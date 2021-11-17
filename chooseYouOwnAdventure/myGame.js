//here will be the function that runs when the page loads...
//Note that in a web browser you need to hit the F12 key to see the console tab
// and see the printed results below.

function myFirstMethod() {
let image= document.getElementById("movie");
let myAge = parseFloat(prompt("Please enter your age"));
	if(myAge >= 18) {
	alert("You have aquired a ticket.");
	console.log("The user is "+myAge);
} else {
	let withGuardian = confirm("Are you with a parent or guardian? Click ok for yes and cancel for no.");
	if (withGuardian) {
		alert("You have aquired a ticket.");
		console.log("The user is "+myAge+" and with a guardian");
	} else {
			alert("You are not eligable to see this movie.");
			console.log("The user is "+myAge+" and without a guardian");
			image.src = "images/shrekCover.png";
		}
	}
}
