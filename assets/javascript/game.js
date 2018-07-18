// pick a theme
// Week days hahahah, ill cahnge it if i get it anywhere near functional

// Array of words 
var wordArray = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];



var wins = 0;

var losses = 0;

document.onkeyup = function(event) {

    var userChoice = event.key;

    var gameWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    
    // var s = "overpopulation";
    // for (var i = 0; i < s.length; i++) {
    //     console.log(s.charAt(i));
    // }
    var gameWordArray = ("");
    // gameWordArray.push
    for (i = 0; i < gameWord.length; i++) {
        console.log(gameWord.charAt(i));
    };


    // console.log(gameWordArray)

    console.log(gameWord);

    console.log(userChoice);

    // var html =
    // "<p>Wins: " + gameWord + "</p>"
    
    // document.querySelector("#game").innerHTML = html; 
};


//     // Re-write the html to reflect game info


//     // if statements to compare userChoice to computerchoice
//     // What happenes if they are ===
//     if (userChoice === computerChoice) {
//         wins++;
//         guessesLeft = 9;
//         guessesSoFar = [];
//         console.log("win");
//     }
//     // What happenes when they're !==
//     if (userChoice !== computerChoice) {
//         guessesLeft--;
//         guessesSoFar.push(userChoice);
//         console.log("lose");
//     // Reset
//     }
//     if (guessesLeft === 0) {
//         losses++;
//         guessesLeft = 9;
//         guessesSoFar = [];
//     }
// };
// // Press any key to get started!

// // Wins: (# of times user guessed the word correctly).

// // If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.

// // As the user guesses the correct letters, reveal them: m a d o _  _ a.

// // Number of Guesses Remaining: (# of guesses remaining for the user).

// // Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).

// // After the user wins/loses the game should automatically choose another word and make the user play it.