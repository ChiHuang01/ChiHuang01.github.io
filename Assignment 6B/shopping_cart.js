
// innerHTML: a property of all DOM objects that represents the contents of the tags of the HTML element

// JavaScript Document



var wishlist = document.getElementById( "wishlist" );
var shopping_bag_content = document.getElementById( "shopping_bag_content" );
cartProducts = null;
var wishListProducts = null;
document.getElementsByClassName("back").onclick = function(){
	sessionStorage.setItem("cartProducts", JSON.stringify(cartProducts));
}


if( sessionStorage.getItem( "wishlistProducts" ) != null ){
  wishListProducts = JSON.parse( sessionStorage.getItem( "wishlistProducts" ) );
  
  var keys = Object.getOwnPropertyNames( wishListProducts );
  
  for( var key of keys ) {
    
    wishlist.innerHTML += `
      <div>
          <div class="pic"> 
            <a href="product_detail.html"><img class="original_cinamon_pic" src="img/original.jpg" style="width:200px; height:auto" alt: "Original_Cinnamon_Picture"/></a>
          </div>
          Flavor: Original <br/>
          Glazing: ${key}
      </div>
    `;
  }
}



if( sessionStorage.getItem( "cartProducts" ) != null ){
  cartProducts = JSON.parse( sessionStorage.getItem( "cartProducts" ) );
  updateCostAndContact(cartProducts);
  var keys = Object.getOwnPropertyNames( cartProducts );
	console.log("keys = " + keys);
  //getOwnPropertyNames will return an array, which is what we want because an array can be accessed one by one to find the item that we want, and any types of collection (e.g., an array, an object) allow you to do that. 
	var counter=1;
  for( var key of keys ) {
    console.log(cartProducts[key]);
    shopping_bag_content.innerHTML += `
      <div class="shopping_bag_item" style="">
        <div class="pic"> 
            <a href="product_detail.html"><img class="original_cinamon_pic" src="img/original.jpg" style="width:310px; height:200px" alt: "Original_Cinnamon_Picture"/></a>
        </div>

        <div class="flavor">Original</div>
        <div class="glazing">Glazing: ${key}</div>
        <div class="quantity">Qty: ${cartProducts[key].quantity} rolls</div>
        <div class="price">$${cartProducts[key].price}</div>
        <button class="remove" onclick='removeProductFromCart("${key}")'>Remove</button>
        <button class="save_for_later">Save for Later</button>
      </div>
    `;
    counter++;
	  if(counter%3==0){
		  shopping_bag_content.innerHTML += '';
	  }
  }
}


function removeProductFromCart( productKey ){ //so the main purpose of this function is to define removeProductFromCart and what it consists of, so that we could use removeProductFromCart in other places. 
    var productElement = event.currentTarget.parentElement;
    productElement.parentElement.removeChild( productElement );
  	alert( productKey );
    delete cartProducts[ productKey ];
    sessionStorage.setItem( "cartProducts", JSON.stringify( cartProducts ) );
	updateCostAndContact(cartProducts);
} //this whole thing is called a definition of (it's a definition of removeProductFromCart( productKey ). And everything after the { is describing what the definition is. ( productKey ) is called a parameter, which is also known as an agrument (parameter and argrument are the same thing). 
//I can name (productKey) whatever I want, it's just so that the content of the definition could refer back to the variable name.  

function updateCostAndContact(cartProducts){
	var sub = 0;
	var tax = 0;
	var total = 0;
	for (var product in cartProducts){
		console.log(cartProducts[product]);
		sub += cartProducts[product].price;
	}
	tax = sub*0.1;
	total = sub+tax;
	document.getElementById("cart_subtotal").innerHTML= sub;
	document.getElementById("cart_tax").innerHTML=tax;
	document.getElementById("cart_total").innerHTML=total;
}


//if( sessionStorage.getItem( "cartProducts" ) != null ){
//  var cartProducts = sessionStorage.getItem( "cartProducts" );
//  
//  var keys = Object.keys( cartProducts );
//  
//  for( var key of keys ) {
//    
//    shopping_bag_content.innerHTML += `
//      <div class="shopping_bag_item">
//        <div class="pic"> 
//            <a href="product_detail.html"><img class="original_cinamon_pic" src="img/original.jpg" style="width:310px; height:200px" alt: "Original_Cinnamon_Picture"/></a>
//        </div>
//
//        <div class="flavor">${key}</div>
//        <div class="glazing">Glazing: sugar-milk</div>
//        <div class="quantity">Qty: ${cartProducts[key].quantity} rolls</div>
//        <div class="price">$30</div>
//        <button id="remove_button" class="remove">Remove</button>
//        <button class="save_for_later">Save for Later</button>
//      </div>
//    `;
//    
//  }
//}



//var remove_button = document.getElementById("remove_button");
//
//remove_button.addEventListener( "click", function( ){
//  console.log( shopping_bag_content.innerHTML );
//  shopping_bag_content.innerHTML = "";
//} );
   



///2nd time//


//// TODO:
//// 1. Make the "add to cart" buttons work the same way as the "add to wishlist" button
//// 2. Allow adding multiple products to the cart and wishlist
//// 3. Allow displaying multiple products in the cart and wishlist
//// 4. Add more details to the wishlist
//
//cartProducts = JSON.parse( sessionStorage.getItem( "cartProducts" ) );
//
//function CumulativeCount () {
//	count++;
//	z = total;
//	var w = document.getElementById("cart-number");
//	w.innerHTML = "(" + bunquantity + ")";
//	
//    // cartProducts: {
//    //   blueberry: { quantity: 3 },
//    //   raspberry: { quantity: 5 },
//    //   Original: { quantity: 7 }
//    // }
//  
//    if( cartProducts == null ) {
//      cartProducts = { };
//    }
//  
//    if( cartProducts.hasOwnProperty( productName.innerHTML ) == true ) {
//      cartProducts[ productName.innerHTML ].quantity += bunquantity;
//    } else {
//      cartProducts[ productName.innerHTML ] = { quantity: bunquantity };
//    }
//    
//  	// TODO: Add to the cart
//  	sessionStorage.setItem( "cartProducts", JSON.stringify( cartProducts ) );
//}
//
//
//// ------------------------------------------------------------------------------------------------------
//// shopping_cart.js -------------------------------------------------------------------------------------
//// ------------------------------------------------------------------------------------------------------
//
//
//function pushhtml(){
//	document.getElementById("shopping_bag_content").innerHTML += 
//		//"<h1>This is the text which has been inserted by JS</h1>";
//		"<div class="shopping_bag_item">\
//					<div class="pic">\ 
//						<a href="product_detail.html"><img class="original_cinamon_pic" src="img/original.jpg" style="width:310px; height:200px" alt: "Original_Cinnamon_Picture"/></a>
//					</div>\
//					
//					<div class="flavor">Original</div>\
//					<div class="glazing">Glazing: sugar-milk</div>\
//					<div class="quantity">Qty: 3 rolls</div>\
//					<div class="price">$30</div>\
//					<button id="remove_button" class="remove">Remove</button>\
//					<button class="save_for_later">Save for Later</button>\
//				</div>";
//	
//}
//
//
//pushhtml();
//
//
//
//
//if( sessionStorage.getItem( "cartProducts" ) != null ){
//  console.log(cartProducts);
////  var cartProducts = sessionStorage.getItem( "cartProducts" );
//
//	//make sure I get the correct array (for loop)
//  var keys = Object.keys( cartProducts ); 
//  
//  count = 0;
//
//	
//  for( var key of keys ) {
//    count += 1;
//    console.log(key); 
//
//    console.log(count);
//  }
//}
//
//
//
//
//
//
//
//
