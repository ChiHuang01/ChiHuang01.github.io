// JavaScript Document

//var x = "hello world";
//var x = 10;
//typeof x;


//var myName = "Chi"

//myName = 8

//let ourName = "freeCodeCamp"

//const pi = 3.14

var x = 87;
x++
console.log(x);

var product = 2.0*2.5;
console.log(product)


var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr)

var ourStr = "I come first. " + "I come second";

var myName = "Chi";
var myStr = "My name is " + myName + " and I am well";

var lastName = "Huang";
lastNameLength = lastName.length;

var lastLetterOfFirstName = lastName[lastName.length - 1];

//firstLetterOfFirstName = myName[2];

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
	var result = "";
	result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store"
	return result; 		
}

console.log(wordBlanks("bike", "slow", "flew", "slowly"));


var ourArray = [50,60,70];


var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);


var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog," 3])




var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
