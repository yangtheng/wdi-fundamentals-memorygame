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

 var streak = 0;

 var checkForMatch = function() {
 	if (cardsInPlay[0] === cardsInPlay[1]) {
	 		alert("You found a match!");
	 		score += 1;
	 		document.getElementById('score').innerHTML = "Score: " + score;
	 		streak += 1;
	 		document.getElementById('streak').innerHTML = "Streak: " + streak;
	 	} else {
	 		alert("Sorry, try again!");
	 		streak = 0;
	 		document.getElementById('streak').innerHTML = "Streak: " + streak;
	 	};
 };

 var flipCard = function () {
	 var cardId = this.getAttribute('data-id')
	 console.log("User flipped " + cards[cardId].rank);
	 console.log(cards[cardId].cardImage);
	 console.log(cards[cardId].suit);

	 if (this.getAttribute('src') === 'images/back.png') {
   cardsInPlay.push(cards[cardId].rank);
   }

   this.setAttribute('src', cards[cardId].cardImage);

	 if (cardsInPlay.length === 2) {
	 	checkForMatch();
	 	cardsInPlay = [];
	 };
 };

 var shuffle = function (array) {
  var i = 0;
  var j = 0;
  var temp = null;

  for (var i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
};

 var resetBoard = function () {
 		var gameBoard = document.getElementById('game-board');
 		gameBoard.innerHTML = "";
 		document.getElementById('score').innerHTML = "Score: " + score;
 		document.getElementById('streak').innerHTML = "Streak: " + streak;

 		cardsInPlay = [];

 		shuffle(cards);

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
		document.getElementById('score').innerHTML = "Score: " + score;
		document.getElementById('streak').innerHTML = "Streak: " + streak;
	};
	resetScoreButton.addEventListener('click',resetScore);
};

toReset();
toResetScore();
