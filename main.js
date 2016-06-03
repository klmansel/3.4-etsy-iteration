(function(){
  'use strict';
  // function forEach(arrayToLoopOver, callback){
  //    for(var i=0; i<arrayToLoopOver.length; i++){
  //      callback(arrayToLoopOver[i], i, arrayToLoopOver); //'i' = the number of the item in the array
  //    }
  // }

//Questions & Answers
//1. Show me how to calculate the average price of all items. Please console.log the average.
//have array "items" with 25 items and 25 prices

// console.log(items[1]); //logs second object (listing) in the array
// console.log(items[0].price); //logs the price of the first item w/index 0

// items.reduce(function(previous, current, index, array) {


// var prices = (function {
//   items[0].price;
//   return prices;
// }

var totalPrice = items.reduce(function(sum, product, index, origArray){
    return sum + product.price;
},0); //placed a 0 here because the sum needs to start at 0

console.log('$'+ Math.floor(totalPrice / items.length) + ' is the average product price.');


//Answer:   The average price is $23.63

//Show me how to get an array of items that cost between $14.00 and $18.00 USD

var cheapProducts = items.filter(function(product, index, origArray){

  if(product.price >=14 && product.price <= 18){
      return true;
  }else{
    return false;
  }

  // return product.price >=14 && product.price <= 18 ? true : false; ternary

  // return product.price >=14 && product.price <= 18;
});

console.log(cheapProducts.length + ' products are between $14 and $18.');


//Show me how find the item with a "GBP" currency code and print its name and
//price. Please console.log the one you find.

var gbp = items.filter(function(product, index, origArray){
  if(product.currency_code === 'GBP'){
    return true;
  }else{
    return false;
  }
});
console.log(gbp.length + ' product uses a GBP currency code.');

//Show me how to find which items are made of wood. Please console.log the ones you find.
var woodItems = items.filter(function(product,index,origArray){
  if(product.materials.indexOf('wood')>=0){//search inside an array within an object
    return true;
  }else{
    return false;
  }
});

console.log(woodItems.length + ' products are made at least partly of wood.');
}());

//Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
var eightOrMore = items.filter(function(product, index, origArray){
  if(product.materials.length>=8){
    return true;
  }else{
    return false;
  }
});
console.log(eightOrMore.length +' products have 8 or more materials.');
//Show me how to calculate how many items were made by their sellers
var homemade = items.filter(function(product,index, origArray){
  if(product.who_made == 'i_did'){
    return true;
  }else{
    return false;
  }
});
console.log(homemade.length + ' products are made by their sellers.');
