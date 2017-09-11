var wordToGuess = ['f', 'i', 'r', 'e', 'b', 'o', 'l', 't'];
var blankWord = ['_', '_', '_', '_', '_', '_', '_', '_'];
var letterGuess = "";
var wrongGuess = [];
var numberOfGuesses = 3;
var guessesLeft = "";

// window.addEventListener('keypress', function(e) {
//   letterGuess = e.key;
//   console.log(letterGuess);
// })

var guessingGame = function(letterGuess) {
  if (wordToGuess.includes(letterGuess)) {
    for (var i = 0; i < wordToGuess.length; i++) {
      if (letterGuess === wordToGuess[i]) {
        blankWord[i] = letterGuess;
      }
    }
  } else {
    wrongGuess.push(letterGuess);
    if (wrongGuess.length >= numberOfGuesses) {
      console.log("Oh no, you lost! Better luck next time!")
      guessesLeft = (numberOfGuesses -= wrongGuess.length);
      return guessesLeft;
    }
  }
  console.log(blankWord);
  console.log(wrongGuess);
}

// ----------------------
// presentation functions
// ----------------------

var blankWordPlace = document.querySelector('.word');
var turnsLeftPlace = document.querySelector('.turns-left');
var wrongGuessPlace = document.querySelector('.wrong-guess');

guessingGame('a');

blankWord.forEach(function(letter) {
  var blankWordLetter = document.createElement('span');
  blankWordLetter.textContent = letter;
  blankWordPlace.appendChild(blankWordLetter);
});

turnsLeftPlace.textContent = guessesLeft;




  //see if letterGuess corresponds to a letter in array
  // if no, print letter to top corner of screen
  // if yes, replace same array index in "blankWord", array with the correct letter
