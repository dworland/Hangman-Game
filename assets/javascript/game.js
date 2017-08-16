var wordBank = ["whale", "octopus", "giraffe", "ostrich", "penguin", "hummingbird", "antelope", "porcupine", "woodpecker"];

var availableLetters = ['a', 'b', 'c', 'd', 'e',
        				'f', 'g', 'h', 'i', 'j', 'k',
       					'l', 'm', 'n', 'o', 'p', 'q',
				        'r', 's', 't', 'u', 'v', 'w',
				        'x', 'y', 'z'];

var chosenWord = "";
var lettersInWord = [];
var lettersGuessed = [];
var numberOfBlanks = 0;
var blanksAndCorrectGuesses = [];
var alreadyGuessed = [];
var wins = 0;
let winsObject = document.getElementById("wins");
var losses = 0;
var guessesRemaingObject = document.getElementById("guessesRemaining");
let alreadyGuessedObject = document.getElementById("alreadyGuessed");
let blanksAndCorrectGuessesObject = document.getElementById("letters");
var imageContainerObject = document.getElementById("imageContainer");
var answerImage = document.getElementById("answerImage");
let guessesRemaining = 12;

function reset() {
	
	document.getElementById("losses").classList.add("hide");
	imageContainerObject.classList.add("hide");
	chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];

	lettersInWord = chosenWord.split("");
	
	numberOfBlanks = lettersInWord.length;
	guessesRemaining = 12;

	lettersGuessed = [];

	alreadyGuessed = [];
	alreadyGuessedObject.innerHTML = '';

	blanksAndCorrectGuesses = [];
	blanksAndCorrectGuessesObject.innerHTML = '';

	answerImage.src = "";


	startGame();
	
};

function startGame() {
	var alreadyWon = false;
	
	guessesRemaingObject.innerHTML = " You have " + guessesRemaining + " guesses remaining. ";

	for (var i = 0; i < numberOfBlanks; i++) {
		blanksAndCorrectGuesses[i] = "_";
		document.getElementById("letters").innerHTML = blanksAndCorrectGuesses.join(" ");
	}

	// If correct key is pressed, populate letter in blank and letters guessed
	document.onkeyup = function(event) {
		
		var userGuess = event.key;
		var correctLetter = false;

			console.log("already", alreadyWon);
		if(guessesRemaining < 1){
			if(!alreadyWon){
				losses++;
				let lossesObject = document.getElementById("losses");
				lossesObject.classList.remove("hide");
			}
			return;
		}
		guessesRemaining--;
		lettersGuessed.push(userGuess);

		if(lettersInWord.indexOf(userGuess) >= 0){
			correctLetter = true;

			for(let i = 0; i < lettersInWord.length; i++){
				if(lettersInWord[i] === userGuess){
					blanksAndCorrectGuesses[i] = userGuess;
					blanksAndCorrectGuessesObject.innerHTML = blanksAndCorrectGuesses.join(" ");
				}
			}
		}

		
		if(blanksAndCorrectGuesses.join("") === chosenWord){
			console.log("you win");
			if(!alreadyWon)
				wins++;
			alreadyWon = true;
			winsObject.innerHTML = wins.toString();
			imageContainerObject.classList.remove("hide");
			answerImage.src = "../Hangman-Game/assets/images/" + chosenWord + ".jpg";
		}

		
		alreadyGuessedObject.innerHTML = lettersGuessed;
		guessesRemaingObject.innerHTML = " You have " + guessesRemaining + " guesses remaining. ";
	}
	
};


reset();








