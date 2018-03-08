
$(document).ready(function() {

    let words = ['ghost', 'skeleton', 'pumpkin','bat','witch'];
    let chosenWord = words[3];
   //  let letterInWord = false;
    let dashWord = '';
    let wins = 0;
    let badGuesses = [];
    let numberGuesses = 10;
    let wrongGuess = false;
    let guessesLeft = 10;

    function createDashWord(word) {
        let tmpDashWord = [];
        for (var i = 0; i < chosenWord.length; i++) {
            dashWord.push="_";
        }
        return tmpDashWord;
    }
    function startGame() {
        //initial states
    chosenWord = words[Math.floor(Math.random() * words.length)];
    dashWord = createDashWord(chosenWord);
    $("#dashDiv").text(dashWord.join(" "));
    $("#winDiv").text(wins);
    }

    startGame();

    document.onkeyup = function(event) {

      let letterGuessed = event.key.toLowerCase();
        
        //check if letter is in word
        for (var i = 0; i < chosenWord.length; i++){
            if (letterGuessed === chosenWord[i]){
                dashWord[i] = letterGuessed;
            }  else {
                wrongGuess = true;
            }
        }

        if (wrongGuess === true) {
            guessesLeft--;
        }

        $("#dashDiv").text(dashWord.join(" "));

        //if dashWord = chosen word, you win
        if (dashWord.join("") === chosenWord) {
            wins++;
            //start new game
            startGame()

        }
        
        $("#winDiv").text(wins);

        //reset game if they win

    }
    
    // 1st event - page loads
    // music plays on page load
    //initial states
    // computer picks from array
    // whatever computer picked from array, there will be an equal number of dashes per letter 
    // press any key to get started
    // user presses key
    // computer saves key
    // if key === letter of the chose item in the array, that letter will appear in that spot
    // key will also appear under letters guessed already
    // same key onkeyup twice will return false
    // if all keys in the array item are guessed correctly, number of guesses will go up
    // current word will reset to a different item in the array, not the same item
    // letters guessed array will clear
    
    });