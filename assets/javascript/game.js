
var letters = ["abcdefghijklmnopqrstuvwxyz"]
var guessedLetters = [];
var wins = 0;
var losses = 0;
var numberGuesses = 9;
var randomLetter = letters[Math.floor(Math.random() * letters.length)];
// Test game with fixed letter:
// var randomLetter = "t";
var win = false;

// When the user presses a key, it will run the following function
document.onkeyup = function(event) {
    // Determine which key was pressed
    var userGuess = event.key;

    function endGame() {
        if (win === true) {
            wins++;
        }
        else {
            losses++;     
        }
        
        numberGuesses = 9;
        randomLetter = letters[Math.floor(Math.random() * letters.length)];
        guessedLetters = [];
    }
    
    function print() {
        var html = "<p>Guess what letter I'm thinking of.</p>" + 
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + numberGuesses + "</p>" +
        "<p>Your Guesses So Far: " + guessedLetters.toString() + "</p>";
        
        document.querySelector("#game").innerHTML = html;
    }

    if (numberGuesses > 1) {
        
        var check = /^[a-zA-Z]+$/;

        if (userGuess.match(check)) {
            
            if (userGuess === randomLetter) {
                        win = true;
                        endGame();
                        print();
            }

            else if (guessedLetters.includes(userGuess) === false) {
                win = false;
                numberGuesses--;
                guessedLetters.push(userGuess);
                print();
            }
        }
        
    }
    
    else {
        endGame();
        print();  
    }            
    
};