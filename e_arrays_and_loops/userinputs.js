const prompt = require("prompt-sync")({sigint: true});

// let getName = prompt("What is your name? ");

// while (getName === "") {
//     getName = prompt("Please enter your name: ")
// }

// console.log(`Hello, ${getName}.`)


console.log("\n");
console.log("* ".repeat(30));
console.log("\n");


// let getName2 = "";

// do {
//     getName2 = prompt("Please enter your name: ");

//     // if (getName !== "") {
//     // }
// } while (getName2 === "");

// console.log(`\nHello, ${getName2}`);
// document.getElementById("displayName").textContent = getName;

const UP = "w";
const DOWN= "s";
const LEFT = "a";
const RIGHT = "d";
const QUIT = "q";

let move = "";

do {
    move = prompt("(W)UP, (S)DOWN, (A)LEFT, (D)RIGHT, (Q)EXIT: ");

    switch (move.toLowerCase()) {
        case UP:
            console.log("UP");
            break;
        case DOWN:
            console.log("DOWN");
            break;
        case LEFT:
            console.log("LEFT");
            break;
        case RIGHT:
            console.log("RIGHT");
            break;
        case QUIT:
            console.log("QUIT");
            break;
        default:
            console.log(`Invalid move: ${move}`);

    }
} while (move !== 'q');