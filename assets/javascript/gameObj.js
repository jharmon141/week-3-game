



var game = {
        words: ["direwolf", "stark", "bolton", "targaryen", "spider", "dorne", "hodor"],
        selectedWord: "",
        lettersOfWord: [],
        displayWord: [],
        userInput: "",
        tries: 12,
        continuePlay: true,

        //chooses random word from word bank
        generateWord: function() {
            this.selectedWord = this.words[Math.floor(Math.random() * this.words.length)];
        },

        //turns selected word into array
        setLettersOfWord: function() {
            this.lettersOfWord = this.selectedWord.split('');

        },

        //displays letters of selected word as dashes
        generateDisplayWord: function() {
            for (var i = 0; i < this.selectedWord.length; i++) {
                this.displayWord[i] = "_";
                return displayWord;
            };
        },

        //the game function
        play: document.onkeyup = function(event) {
            this.generateWord;
            this.setLettersOfWord;
            this.generateDisplayWord;

                //listens for userInput
                document.onkeyup = function(event) {

                    //determines which key is pressed
                    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

                    //loops through letters to determine if userGuess = letter in word
                    for (var i = 0; i < this.lettersOfWord.length; i++) {
                        if (this.lettersOfWord[i] == userGuess) {
                            console.log(this.lettersOfWord[i]);
                        };
                    };
                };
        },
      }







        //computer listens for key event
        //computer picks word from list-style
        //computer breaks down word into letters array
        //computer displays letters as dashes
        //user inputs key
        //computer loops through letters array and tries to match user input
          //if match is found computer replaces dash with letters
          //if not a match computer lists key in letters used div and subtracts a try
