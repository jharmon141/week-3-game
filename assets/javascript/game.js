var words = ["direwolf", "stark", "bolton", "targaryen", "spider", "dorne", "hodor", "ice", "winterfell", "westeros", "dothraki", "dragon", "lannister", "tyrell", "braavos", "essos", "pentos", "stoneheart", "twincest", "connington", "snow", "gendry", "joffrey", "baratheon", "tyrion", "wall", "bastard", "riverrun", "highgarden", "pyke", "astapor", "qarth", "martell", "giantsbane", "greyjoy", "maester"];
var selectedWord = "";
var userInput = "";
var wins = 0;

var li = document.getElementsByClassName('letter');

//the game function
var play = document.onkeyup = function(event) {

    //selects random word from word bank
    var generateWord = function() {
        selectedWord = words[Math.floor(Math.random() * words.length)];
    };

    //turns selected word into array of letters
    var setLettersOfWord = function() {
        lettersOfWord = selectedWord.split('');
    };

    //displays letters of selected word as dashes
    var generateDisplayWord = function() {
        for (var i = 0; i < selectedWord.length; i++) {
            displayWord[i] = "_";
        };
    };

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var usedLetters = [];
    var lettersOfWord = [];
    var displayWord = [];
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
        for (var i = 0; i < alphabet.length; i++) {
            if (userGuess == alphabet[i]) {
                var x = alphabet[i];
                alphabet.splice(i, 1);
            };
        };

        //loops through lettersOfWord to determine if userGuess (now var x) is a letter in the word
        for (var i = 0; i < lettersOfWord.length; i++) {
            if (lettersOfWord[i] == x) {
                //replaces dash with letter
                displayWord[i] = x;
                var y = x;
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

        if (tries == 0) {
            alert("You lose!" + '\n' + "The correct word was: " + selectedWord.toUpperCase());
            play();
        };

        if (displayWord.toString() === lettersOfWord.toString()){
            alert("You win!" + '\n' + "The correct word was: " + selectedWord.toUpperCase());
            wins += 1;
            play();
        };
    };
};
