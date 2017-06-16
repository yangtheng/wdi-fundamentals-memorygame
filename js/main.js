 var cards = [
 {
 	rank: "queen",
 	suit: "hearts",
 	cardImage: "images/queen-of-hearts.png"
 },
 {
 	rank: "queen",
 	suit: "diamonds",
 	cardImage: "images/queen-of-diamonds.png"
 },
 {
 	rank: "king",
 	suit: "hearts",
 	cardImage: "images/king-of-hearts.png"
 },
 {
 	rank: "king",
 	suit: "diamonds",
 	cardImage: "images/king-of-diamonds.png"
 }
 ];

 var cardsInPlay = [];

 var score = 0;
 document.getElementById('score').innerHTML = score;

 var streak = 0;
 document.getElementById('streak').innerHTML = streak;


 var checkForMatch = function() {
 	if (cardsInPlay[0] === cardsInPlay[1]) {
	 		alert("You found a match!");
	 		score += 1;
	 		document.getElementById('score').innerHTML = score;
	 		streak += 1;
	 		document.getElementById('streak').innerHTML = streak;
	 	} else {
	 		alert("Sorry, try again!");
	 		streak = 0;
	 		document.getElementById('streak').innerHTML = streak;
	 	};
 };

 var flipCard = function () {
	 var cardId = this.getAttribute('data-id')
	 console.log("User flipped " + cards[cardId].rank);
	 console.log(cards[cardId].cardImage);
	 console.log(cards[cardId].suit);

	 cardsInPlay.push(cards[cardId].rank);

	 this.setAttribute('src', cards[cardId].cardImage);

	 if (cardsInPlay.length === 2) {
	 	checkForMatch();
	 	cardsInPlay = [];
	 };
 };

 var createBoard = function () {
 	for (var i = 0; i < cards.length; i++) {
 		var cardElement = document.createElement('img');
 		cardElement.setAttribute('src', 'images/back.png');
 		cardElement.setAttribute('data-id', i);
 		cardElement.addEventListener('click',flipCard);
 		document.getElementById('game-board').appendChild(cardElement);
 	};
 };

 createBoard();

 var resetBoard = function () {
 		var gameBoard = document.getElementById('game-board');
 		gameBoard.innerHTML = "";

 		cardsInPlay = [];
 		
 		for (var i = 0; i < cards.length; i++) {
 		var cardElement = document.createElement('img');
 		cardElement.setAttribute('src', 'images/back.png');
 		cardElement.setAttribute('data-id', i);
 		cardElement.addEventListener('click',flipCard);
 		document.getElementById('game-board').appendChild(cardElement);
 	};
 }; 

var toReset = function() {
	var button = document.getElementById('reset');
	button.addEventListener('click',resetBoard);
};

var toResetScore = function() {
	var resetScoreButton = document.getElementById('reset-score');
	var resetScore = function () {
		score = 0;
		streak = 0;
		document.getElementById('score').innerHTML = score;
		document.getElementById('streak').innerHTML = streak;
	};
	resetScoreButton.addEventListener('click',resetScore);
};

toReset();
toResetScore();