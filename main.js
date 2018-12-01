console.log("Up and running!");

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
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again.");
// console.log needs to be changed to alert
	}
}

var flipCard = function (cardId) {
	// I don't quite understand where these go. 
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank); 
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	// Somehow addng the two linse above up here got my checkForMatch function to run...
if (cardsInPlay.length === 2) {
	checkForMatch();
}
}


flipCard(0);
flipCard(2);