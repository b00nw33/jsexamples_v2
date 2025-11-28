// const prompt = require("prompt-sync")({ sigint: true });

let ans = 10;
let ansString = "ten";

let userInput = prompt("Guess the number. Press q or Q to quit.");
userInput = userInput.trim().toLowerCase();


while (userInput !== "q") { // as long as the user doesn't enter 'q' AND 'Q', run the loop

    userInput = userInput.trim().toLowerCase();

    if (userInput == 10 || userInput === "ten") {
        alert("You are correct!");
        break;
    }
    
    if (!userInput) userInput = prompt("Your answer is empty. Enter a value: ");    
    else userInput = prompt("Invalid input. Enter a value: ");
    // if (userInput == ans) { // if user's answer is a number 10

    //     alert("You are correct!!");
    //     break;

    // } else if (!userInput) { // else if the user's input is undefined == false (!false == true)

    //     userInput = prompt("Your answer is empty. Please try again.");

    // }
    // else {

    //     userInput = prompt("Wrong answer. Guess again. Press q or Q to quit.");

    // }
}
