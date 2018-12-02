// PROBLEMS With GAME: 
// 1.) No RESET BUTTON. 
// 2.) You can click the same card twice. 
// 3.) Second card doesn't flip over until after alert.
// 4.) Cards don't shuffle. 

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: 	"images/king-of-diamonds.png",
	}
];

// console logging "Use flipped object"

var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
// console.log needs to be changed to alert
	}
}

var flipCard = function () {
	// I don't quite understand where these go. 
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank); 
	
	console.log(cards[cardId].cardImage);
	
	console.log(cards[cardId].suit);
	// Somehow addng the two linse above up here got my checkForMatch function to run...
	this.setAttribute('src', cards[cardId].cardImage);
if (cardsInPlay.length === 2) {
	checkForMatch();
}
}

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
    	var cardElement = document.createElement('img');

    	cardElement.setAttribute('src' , 'images/back.png');

    	cardElement.setAttribute('data-id' , i);
    	cardElement.addEventListener('click' , flipCard);
    	document.getElementById('game-board').appendChild(cardElement);

    	
    }
}

createBoard();