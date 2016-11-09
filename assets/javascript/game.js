var words = ["direwolf", "stark", "bolton", "targaryen", "spider", "dorne", "hodor"];
var selectedWord =  "";
var lettersOfWord = [];
var displayWord = [];
var userInput =  "";
var tries = 12;
var continuePlay = true;

//chooses random word from word bank
var generateWord = function() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
};

//turns selected word into array
var setLettersOfWord =  function() {
    lettersOfWord = selectedWord.split('');
}

//displays letters of selected word as dashes
var generateDisplayWord =  function() {
    for (var i = 0; i < selectedWord.length; i++) {
        displayWord[i] = selectedWord[i].replace(/[i]/g, '_');
    };
};

//the game function
var play = document.onkeyup = function(event) {
    generateWord();
    setLettersOfWord();
    generateDisplayWord();

        //listens for userInput
        document.onkeyup = function(event) {

            //determines which key is pressed
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

            //loops through letters to determine if userGuess = letter in word
            for (var i = 0; i < lettersOfWord.length; i++) {
                if (lettersOfWord[i] == userGuess) {
                    console.log(lettersOfWord[i]);
                };
            };
        };
};
