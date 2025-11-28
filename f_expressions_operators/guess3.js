// const prompt = require("prompt-sync")({ sigint: true });

let ans = 10;
let ansString = "ten";

let userInput = prompt("Guess the number. Press q or Q to quit.");
userInput = userInput.trim().toLowerCase();


while (userInput !== "q") { // as long as the user doesn't enter 'q' AND 'Q', run the loop

    userInput = userInput.trim().toLowerCase();

    function isInteger(str) {
        return /^-?\d+$/.test(str); // Matches optional sign and one or more digits
    }
    
    // Correct response
    if (userInput == 10) {
        alert("You are correct!");
        break;
    }

    // Invalid response
    if (!userInput || !isInteger(userInput)) userInput = prompt("Your response is invalid. Enter a value: ");
    else {
        // Incorrect response
        const hint = (userInput < ans) ? "HIGHER" : "LOWER";
        userInput = prompt(`The correct answer is ${hint}. Enter a value: `);
    }
}

alert("Thank you for playing!")