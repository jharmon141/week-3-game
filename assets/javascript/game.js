var words = ["direwolf", "stark", "bolton", "targaryen", "spider", "dorne", "hodor", "ice", "winterfell", "westeros", "dothraki", "dragon", "lannister", "tyrell", "bravos", "essos", "pentos", "stoneheart", "twincest"];
var selectedWord = "";
var lettersOfWord = [];
var displayWord = [];
var userInput = "";
var wins = 0;

var li = document.getElementsByClassName('letter');

//selects random word from word bank
var generateWord = function() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    console.log(selectedWord);
};

//turns selected word into array of letters
var setLettersOfWord = function() {
    lettersOfWord = selectedWord.split('');
}

//displays letters of selected word as dashes
var generateDisplayWord = function() {
    for (var i = 0; i < selectedWord.length; i++) {
        displayWord[i] = "_";
    };
};

//the game function
var play = document.onkeyup = function(event) {
    var usedLetters = [];
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    generateWord();
    setLettersOfWord();
    generateDisplayWord();
    tries = 6;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("currentWord").innerHTML = displayWord.join('  ');
    document.getElementById("guessesremaining").innerHTML = tries;
    document.getElementById("letterGuessed").innerHTML = usedLetters;

    //listens for userInput
    document.onkeyup = function(event) {

        //determines which key is pressed
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        //pull letter from alphabet and set as new variable (x)
        for (var i = 0; i < alphabet.length; i++){
          if (userGuess == alphabet[i]){
            var x = alphabet[i];
            alphabet.splice(i, 1);
            console.log(alphabet);
          };
        };

        //loops through lettersOfWord to determine if userGuess (now var x) is a letter in the word
        for (var i = 0; i < lettersOfWord.length; i++) {
            if (lettersOfWord[i] == x){
                //replaces dash with letter
              displayWord[i] === lettersOfWord[i];
              var y = x;
              console.log(displayWord[i]);
              document.getElementById("currentWord").innerHTML = displayWord.join('  ');
            };
        };

        if (y !== x) {
            //adds letter to usedLetters array
            usedLetters.push(x);
            document.getElementById("letterGuessed").innerHTML = usedLetters;
            //and subtracts one try
            tries = tries - 1;
            document.getElementById("guessesremaining").innerHTML = tries;

        };

        if (tries == 0){
        play();
        };

        if (lettersOfWord === displayWord) {
        wins++;
        play();
        };
    };
};
