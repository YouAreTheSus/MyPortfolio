// no go home
function socialCreditLoss() {
	document.querySelector("#textOnPage").innerHTML = "You have lost -30,000,000 social credits. Have a nice day!";
	document.querySelector("#bg").src = "images/30000000socialCredits.png";
}

function socialCreditGain() {
	document.querySelector("#bg").src = "images/johnxina.png";
	document.querySelector("#textOnPage").innerHTML = "For answering this question correctly you have gained 10000 social credits, your reward is a personal 1 on 1 meeting with Xhong Xina.";
}

function ignorance() {
	document.querySelector("#bg").src = "images/dyaneTheWokJohnson.png";
	document.querySelector("#textOnPage").innerHTML = "I admire your ignorance, you will make a great citizen of the PRC. I, Dyane the 'Wok' Jonhson, will give you +15 social credits."
}

function execution() {
	document.querySelector("#bg").src = "images/XiJiping.png";
	document.querySelector("#textOnPage").innerHTML = "You have disrespected my glorious country. Your execution date is tommorrow, Xhong Xina has offered bing chilling as your final meal."
}

function thePoopie() {
	alert("Alert! Your computer has a virus! you must send dogecoin to Protogent Antivirus™ in order to remove the virus.");
	let userInput = prompt("Is taiwan a real country?").toLowerCase();
	console.log("The user has inputed "+userInput);
	if (userInput == "yes"||
			userInput == "kinda") {
		console.log("I have concluded the User said yes.")
		socialCreditLoss();
	}	else if (userInput == "no") {
			console.log("I have concluded the User said no.")
			socialCreditGain();
	} else if (userInput == "what" ||
					userInput == "idk") {
				console.log("I have concluded the user dosen't know.")
				ignorance();
	} else if (userInput == "taiwan"||
						userInput == "better1") {
					console.log("I have concluded the user is an enemy of the state.")
					execution();
	} else {
					alert("That is not a valid answer, please try to respond reasonably.");
					thePoopie();
	}
} //end popie
