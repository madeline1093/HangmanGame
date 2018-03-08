let words = ['maine coon', 'siamese', 'ragdoll', 'persian', 'bengal', 'sphynx', 'abyssinian','burmese', 'russian blue', 'scottish fold', 'american shorthair', 'savannah', 'javanese', 'havana brown', 'oriental'];
let dashGuess = [];
let userKey = 'c';
let guessIndex = '';

let word = words[Math.floor(Math.random() *words.length)];

//create dash display - only display dashes on screen
for (var i = 0; i <word.length; i++) {
  dashGuess.push("_");

}

if (words.indexOf(userKey) > -1) {
    guessIndex = words.indexOf(userKey);
  } 

console.log(guessIndex);

dashGuess[guessIndex] = userKey;

dashGuessStr = dashGuess.join(" ");

console.log(dashGuessStr);

document.write('hello');

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