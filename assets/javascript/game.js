var words = ["direwolf", "stark", "bolton", "targaryen", "spider", "dorne", "hodor"];
var selectedWord =  "";
var lettersOfWord = [];
var displayWord = [];
var userInput =  "";
var tries = 12;
var wins = 0;

var li = document.getElementsByClassName('letter');

//selects random word from word bank
var generateWord = function() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
};

//turns selected word into array of letters
var setLettersOfWord =  function() {
    lettersOfWord = selectedWord.split('');
}

//displays letters of selected word as dashes
var generateDisplayWord =  function() {
    for (var i = 0; i < selectedWord.length; i++) {
        displayWord[i] = "_";
    };
};

//the game function
var play = document.onkeyup = function(event) {
    var usedLetters = [];
    generateWord();
    setLettersOfWord();
    generateDisplayWord();
    tries = 12;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("currentWord").innerHTML = displayWord.join('  ');
    document.getElementById("guessesremaining").innerHTML = tries;
    document.getElementById("letterGuessed").innerHTML = usedLetters;

        //listens for userInput
        document.onkeyup = function(event) {

            //determines which key is pressed
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

            //loops through letters to determine if userGuess = letter in word
            for (var i = 0; i < lettersOfWord.length; i++) {
                //user

              };

            if (lettersOfWord[i] == userGuess) {
              //computer replaces dash with letter

            }else{
              //computer adds letter to usedLetters array
              usedLetters.push(userGuess);
              document.getElementById("letterGuessed").innerHTML = usedLetters;
              //and subtracts one try
              tries = tries -1;
              document.getElementById("guessesremaining").innerHTML = tries;

              };

            //if (tries == 0){
              //break;
            //};

            //if (selectedWord == displayWord) {
              //wins++;
              //break;
            //};




            };

          };
