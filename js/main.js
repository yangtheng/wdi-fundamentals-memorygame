 var cards = ["queen", "queen", "king", "king"];
 var cardsInPlay = [];
 var cardOne = cards[0];
 cardsInPlay.push(cardOne);

 console.log ("User flipped" + " " + cardsInPlay[cardsInPlay.length - 1]);

 var cardTwo = cards[1];
 cardsInPlay.push(cardTwo);

 console.log ("User flipped" + " " + cardsInPlay[cardsInPlay.length - 1]);

 if (cardsInPlay.length === 2) {
 	if (cardsInPlay[0] === cardsInPlay[1]) {
 		alert("You found a match!");
 	} else {
 		alert("Sorry, try again!");
 	}
 }