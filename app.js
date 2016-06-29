$(document).ready(function(){

var claim1 = new Claim("John Doe", "Specialist", 1100);

var claim2 = new Claim("Jane Doe", "Optical", 100);

var claim3 = new Claim("Joe Johnson", "Emergency", 31000);

var claim4 = new Claim("Sharon Smith", "Emergency", 1300);

var claim5 = new Claim("Steve Wright", "Primary Care", 770);

var initialList = [claim1, claim2, claim3, claim4, claim5];

var totalPayedOut = 0;

function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

var claim6 = new Claim("Katie Vogel", "Primary Care", 5000);

var claim7 = new Claim("John Arends", "Optical", 250);

var claim8 = new Claim("Nora Schull", "Specialist", 741.5);

var claim9 = new Claim("Margaret Selva", "Emergency", 999);

var claim10 = new Claim("Jessica Arends", "Primary Care", 457);




initialList.push(claim6, claim7, claim8, claim9, claim10);






//function to determine percent covered


function percentCovered(i){
	var coverage = 0;

	if(initialList[i].visitType === "Optical"){
		coverage += 0;
	}
	 if (initialList[i].visitType === "Specialist"){
		 coverage += .1;
		}
	if (initialList[i].visitType === "Emergency"){
		coverage += 1;
	}
	if (initialList[i].visitType === "Primary Care"){
		coverage += .5;
	}

console.log("The percent covered for claim" + (i + 1) + " is " + coverage * 100 + "%.");
return coverage;
}



//function to determine amount covered

function amountCovered(i){
	var totalCost = initialList[i].visitCost;
	var percent = percentCovered(i);
	var name = initialList[i].patientName;
	var amount = 0;
		amount += Math.round(totalCost*percent);

		console.log("The total amount paid for claim" + (i + 1) + " is $" + amount + ".");

		console.log("Paid out $" + amount + " for " + name + ".");
		return amount;
	}

//function that will print out entire list of information for all claims
//and calculates total amount paid to ALL claims in the list
var amount = 0;

function allClaims(initialList) {
var amount = 0;
	for (i = 0; i < initialList.length; i++){
		function amountCovered(i){
			var totalCost = initialList[i].visitCost;
			var percent = percentCovered(i);
			var name = initialList[i].patientName;
			// var amount = 0;
				amount += Math.round(totalCost*percent);

				// console.log("The total amount paid for claim" + (i + 1) + " is $" + amount + ".");
				//
				// console.log("Paid out $" + amount + " for " + name + ".");
				// $(document).ready(function(){
				    $("h2 p").append("The total amount paid for claim" + (i + 1) + " is $" + amount + ". Paid out $" + amount + " for " + name + ".");
				// })
				return amount;
			}

	}
}




//Here is a for loop that will run through all the claims in the list and
//find a final total amount paid to all claims
var totalPayedOut = 0;
for (i = 0; i < initialList.length; i ++) {
	totalPayedOut += amountCovered(i);
}
	console.log("The total paid for all claims is: $" + totalPayedOut + ".");


//Trying to see if the same js function can be appended to the DOM
// rather than just logged into the console


    $("footer").append("Total paid for all claims: " + totalPayedOut + ".");
});
//
// $(document).ready(function(){
    // $("footer").append("The total amount paid for claim" + (i + 1) + " is $" + amount + ". Paid out $" + amount + " for " + name + ".");
