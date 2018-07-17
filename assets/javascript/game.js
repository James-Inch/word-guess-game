// pick a theme
// Week days hahahah, ill cahnge it if i get it anywhere near functional
// Array of words 
var wordArray = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday" ];
var gameWord = wordArray[Math.floor(Math.random() * wordArray.length)];

console.log(gameWord);


var wins = 0;
var losses = 0;



// ill need a function that wraps everthing kind of like in the other game 
document.onkeyup = function(event) {
    var html = 
    "<p>Wins: " + gameWord + "</p>" 

    document.querySelector("#game").innerHTML = html;
};
// // Create a variable for computerChoice 
// document.onkeyup = function (event) {

//     var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//     // var for useerChoice
//     var userChoice = event.key;
//     console.log(userChoice);
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


//     // Re-write the html to reflect game info
//    


// };
// // Press any key to get started!

// // Wins: (# of times user guessed the word correctly).

// // If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.

// // As the user guesses the correct letters, reveal them: m a d o _  _ a.

// // Number of Guesses Remaining: (# of guesses remaining for the user).

// // Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).

// // After the user wins/loses the game should automatically choose another word and make the user play it.