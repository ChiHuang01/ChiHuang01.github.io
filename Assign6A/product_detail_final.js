
//

var w  = 0;
var z = 0;

var bunquantity=0;
var glazingselection = document.getElementById("btn-none").addEventListener("click", changeNone )
var glazingselection = document.getElementById("btn-sugar-milk").addEventListener("click", changeSugarMilk )
var glazingselection = document.getElementById("btn-vanilla-milk").addEventListener("click", changeVanillaMilk )
var glazingselection = document.getElementById("btn-double-chocolate").addEventListener("click", changeDoubleChocolate )



document.getElementById("btn-addone").addEventListener("click", addbun);
document.getElementById("btn-addfive").addEventListener("click", addfivebuns);
document.getElementById("btn-addtwelve").addEventListener("click", addtwelvebuns);


function changeNone (){
	
	document.getElementById("btn-none").style.color= "lightblue";
}

function changeSugarMilk (){
	
	document.getElementById("btn-sugar-milk").style.color= "lightblue";
}


function changeVanillaMilk (){
	
	document.getElementById("btn-vanilla-milk").style.color= "lightblue";
}

function changeDoubleChocolate (){
	
	document.getElementById("btn-double-chocolate").style.color= "lightblue";
}



function addbun (){
	bunquantity++ //add one	--> bunquantity = bunquantity+1
	//bunquantity = bunquantity+5
	
	console.log("addone", bunquantity);
	document.getElementById("total").innerHTML = bunquantity;
	
}


function addfivebuns (){
	bunquantity = bunquantity+5
	console.log("addfive", bunquantity);	
	document.getElementById("total").innerHTML = bunquantity;
}


function addtwelvebuns (){
	bunquantity = bunquantity+12
	console.log("addtwelve", bunquantity);	
	document.getElementById("total").innerHTML = bunquantity;
}

if(! count){
	var count =0;
	var number =0;
}

function CumulativeCount () {
	count++;
	z = total;
	var w = document.getElementById("cart-number");
	w.innerHTML = "(" + bunquantity + ")";
}