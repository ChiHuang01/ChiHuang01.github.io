
// innerHTML: a property of all DOM objects that represents the contents of the tags of the HTML element

// JavaScript Document



var wishlist = document.getElementById( "wishlist" );
var shopping_bag_content = document.getElementById( "shopping_bag_content" );
var cartProducts = null;
var wishListProducts = null;


if( localStorage.getItem( "wishlistProducts" ) != null ){
  wishListProducts = JSON.parse( localStorage.getItem( "wishlistProducts" ) );
  
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



if( localStorage.getItem( "cartProducts" ) != null ){
  cartProducts = JSON.parse( localStorage.getItem( "cartProducts" ) );
  
  var keys = Object.getOwnPropertyNames( cartProducts );
  
  for( var key of keys ) {
    
    shopping_bag_content.innerHTML += `
      <div class="shopping_bag_item">
        <div class="pic"> 
            <a href="product_detail.html"><img class="original_cinamon_pic" src="img/original.jpg" style="width:310px; height:200px" alt: "Original_Cinnamon_Picture"/></a>
        </div>

        <div class="flavor">Original</div>
        <div class="glazing">Glazing: ${key}</div>
        <div class="quantity">Qty: ${cartProducts[key].quantity} rolls</div>
        <div class="price">$${cartProducts[key].quantity * 5}</div>
        <button class="remove" onclick='removeProductFromCart("${key}")'>Remove</button>
        <button class="save_for_later">Save for Later</button>
      </div>
    `;
    
  }
}


function removeProductFromCart( productKey ){
    var productElement = event.currentTarget.parentElement;
    productElement.parentElement.removeChild( productElement );
  	alert( productKey );
    delete cartProducts[ productKey ];
    localStorage.setItem( "cartProducts", JSON.stringify( cartProducts ) );
}



//if( localStorage.getItem( "cartProducts" ) != null ){
//  var cartProducts = localStorage.getItem( "cartProducts" );
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
//cartProducts = JSON.parse( localStorage.getItem( "cartProducts" ) );
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
//  	localStorage.setItem( "cartProducts", JSON.stringify( cartProducts ) );
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
//if( localStorage.getItem( "cartProducts" ) != null ){
//  console.log(cartProducts);
////  var cartProducts = localStorage.getItem( "cartProducts" );
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
