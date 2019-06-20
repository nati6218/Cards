$(document).ready(function(){
var suits = ["of hearts", "of clubs", "of spades", "of diamonds"];
var cards = ["ace","1", "2","3","4","5","6","7","8","9","10","jack","queen","king"]

suits.forEach(function(suit){
  cards.forEach(function(card){
     $('ul').append("<li>" + card + " " + suit+ "</li>")

  });
});
// for (var i = 0; i < suits.length; i++){
//   for (var j = 0; j < cards.length; j++){
//     $('ul').append("<li>" + cards[j] + " " + suits[i] + "</li>")
//   }
// }
});
