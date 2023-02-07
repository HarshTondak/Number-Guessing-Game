'use strict';

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🎉 Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;



// Number to be guessed
let num = Math.trunc((Math.random()) * 20) + 1;

// This score variable is called state variable as it is declared in JS file and used inside index file...
// Current Score of the player
let score = 20;

let highscore = 0;

// To make the whole program less repetitive we create this function
const displayMessage = function(message){
    document.querySelector(".message").textContent = message;
}

// On clicking check button
// addEventListener(event to happen, function for what to do after that happens?)
document.querySelector(".check").addEventListener("click", function(){

    const guess = Number(document.querySelector(".guess").value) ;
    console.log(guess, typeof guess);
    
    // Updating message according to the number entered
    // For No Input
    if(!guess){
        displayMessage("🛑 No Number Entered...");
        // document.querySelector(".message").textContent = "🛑 No Number Entered...";
    }
    else if(guess < 0){
        displayMessage("❌ Invalid Number Entered...");
        // document.querySelector(".message").textContent = "❌ Invalid Number Entered...";
    }
    // When the guess is right
    else if(guess === num){
        displayMessage("🎉 Correct Number!!!");
        // document.querySelector(".message").textContent = "🎉 Correct Number!!!";

        document.querySelector(".number").textContent = num;

        // For changing the background color
        document.querySelector("body").style.backgroundColor = "#32a800a6";

        // Doubling the width of the the number to be guessed on right guess
        document.querySelector(".number").style.width = "30rem";

        // Updating the highscore if needed
        if(score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }
    // Updatign score too incase of wrong choices
    else if(guess !== num){
        if(score > 1){
            displayMessage(guess>num ? "⬆️ Too HIGH..." : "⬇️ Too LOW...");
            // document.querySelector(".message").textContent = 
            //     guess>num ? "⬆️ Too HIGH..." : "⬇️ Too LOW...";
            score--;
            document.querySelector(".score").textContent = score;
        }
        // When player score becomes ZERO
        else{
            // Chnaging background color
            document.querySelector("body").style.backgroundColor = "#c80000";

            // Chnaging the message
            displayMessage("⚠️ You LOST!!!");
            // document.querySelector(".message").textContent = "👁️‍🗨️ You LOST!!!";
            document.querySelector(".score").textContent = 0;
        }
    }
});


// When we want to play the game again
document.querySelector(".again").addEventListener("click", function(){

    // Update the score
    score = 20;
    // Find new random value to be guessed
    num = Math.trunc((Math.random()) * 20) + 1;

    // Updating elements
    displayMessage("Start guessing...");
    // document.querySelector(".message").textContent = "Start guessing...";

    document.querySelector(".score").textContent = score;

    document.querySelector(".number").textContent = "?";

    document.querySelector(".guess").value = "";

    // For changing the background color
    document.querySelector("body").style.backgroundColor = "#222";

    // Doubling the width of the the number to be guessed on right guess
    document.querySelector(".number").style.width = "15rem";
});