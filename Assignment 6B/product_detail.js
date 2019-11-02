

//

var w  = 0;
var z = 0;
var bunquantity=0;
var glazingselection = document.getElementById("btn-none").addEventListener("click", changeNone )
var glazingselection = document.getElementById("btn-sugar-milk").addEventListener("click", changeSugarMilk )
var glazingselection = document.getElementById("btn-vanilla-milk").addEventListener("click", changeVanillaMilk )
var glazingselection = document.getElementById("btn-double-chocolate").addEventListener("click", changeDoubleChocolate )
var wishlist = document.getElementById("wishlist")
var productName = document.getElementById("productName")
var cartProducts = JSON.parse( sessionStorage.getItem( "cartProducts" ) ); //JSON formats my data into objects, so that it's easier to access the attributes in the data to manipulate them. 
//( localStorage.getItem( "cartProducts" ) = we're going to the local storage to get a variable called cartProducts
//cartProducts = sessionStorage.getItem( "cartProducts" );
console.log("initial cart: " + cartProducts);
var wishlistProducts = JSON.parse( sessionStorage.getItem( "wishlistProducts" ) );

wishlist.addEventListener("click", function(){
  
  	var selectedGlazing = document.querySelector( ".grid-container-glazing .selected" );
    if( wishlistProducts == null ) {
        wishlistProducts = { };
      }

      if(wishlistProducts.hasOwnProperty( selectedGlazing.innerHTML ) == true ) {
        wishlistProducts[ selectedGlazing.innerHTML ].quantity += bunquantity;
		wishlistProducts[selectedGlazing.innerHTML].price += 5*bunquantity;
      } else {
        wishlistProducts[ selectedGlazing.innerHTML ] = { quantity: bunquantity,
														price: 5*bunquantity
														}; 
		  //{ quantity: bunquantity } is an object and this is saying that quantity = bunquantity 
      }

      sessionStorage.setItem( "wishlistProducts", JSON.stringify( wishlistProducts ) ); 
	//JSON sets everything into object (JSON.parse). JSON.stringify sets an object into string 
})


document.getElementById("btn-addone").addEventListener("click", addbun);
document.getElementById("btn-addfive").addEventListener("click", addfivebuns);
document.getElementById("btn-addtwelve").addEventListener("click", addtwelvebuns);


function changeNone (){
	resetGlazings( );
    document.getElementById("btn-none").classList.add( "selected" );
	document.getElementById("btn-none").style.color= "lightblue";
}

function changeSugarMilk (){
	resetGlazings( );
    document.getElementById("btn-sugar-milk").classList.add( "selected" );
	document.getElementById("btn-sugar-milk").style.color= "lightblue";
}


function changeVanillaMilk (){
	resetGlazings( );
    document.getElementById("btn-vanilla-milk").classList.add( "selected" );
	document.getElementById("btn-vanilla-milk").style.color= "lightblue";
}

function changeDoubleChocolate (){
	resetGlazings( );
    document.getElementById("btn-double-chocolate").classList.add( "selected" );
	document.getElementById("btn-double-chocolate").style.color= "lightblue";
}

function resetGlazings( ){
    bunquantity = 0;
    document.getElementById( "total" ).innerHTML = 0;
    document.getElementById("btn-none").classList.remove( "selected" );
	document.getElementById("btn-none").style.color= "initial";
    document.getElementById("btn-sugar-milk").classList.remove( "selected" );
	document.getElementById("btn-sugar-milk").style.color= "initial";
    document.getElementById("btn-vanilla-milk").classList.remove( "selected" );
	document.getElementById("btn-vanilla-milk").style.color= "initial";
    document.getElementById("btn-double-chocolate").classList.remove( "selected" );
	document.getElementById("btn-double-chocolate").style.color= "initial";
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
  	var selectedGlazing = document.querySelector( ".grid-container-glazing .selected" );
	console.log("selectedGlazing: " + selectedGlazing.innerHTML);
	var w = document.getElementById("cart-number");
	w.innerHTML = "(" + bunquantity + ")";

	// cartProducts: {
    //   sugar-milk: { quantity: 3 },
    //   none: { quantity: 5 },
    //   double-chocolate: { quantity: 7 }
    // }
  
    if( cartProducts == null ) {
      cartProducts = { };
    }
	bunquantity = parseInt(bunquantity);
	console.log(cartProducts[selectedGlazing.innerHTML]);
    if(cartProducts[selectedGlazing.innerHTML] != null ) {
      cartProducts[selectedGlazing.innerHTML ].quantity += bunquantity;
		cartProducts[selectedGlazing.innerHTML].price += (5*bunquantity);
		cartProducts[selectedGlazing.innerHTML].tax += (0.1*5*bunquantity);
    } else {
      cartProducts[ selectedGlazing.innerHTML ] = { quantity: bunquantity, price: 5*bunquantity, tax: 0.5*bunquantity };
		console.log("cart added " + cartProducts[selectedGlazing.innerHTML] );
    }
    
  	// TODO: Add to the cart
	console.log(cartProducts);

  	sessionStorage.setItem( "cartProducts", JSON.stringify( cartProducts ) );
}
    


