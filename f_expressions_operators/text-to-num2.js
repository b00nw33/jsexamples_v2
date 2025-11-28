const toNum = require('words-to-numbers').default;
const prompt = require('prompt-sync')({ sigint: true });

// console.log(wordsToNumbers('four thousand and thirty'));

let input = prompt("Enter a number in words: ")

while (input !== "q") {

    input = toNum(input);

    switch (true) {
        case input > 100:
            console.log(`You entered ${input}. That's a LARGE number!`);
            input = prompt("Enter a number in words: ")
            break;
        default:
            console.log(`You entered ${input}. That is a SMALL number.`)
            input = prompt("Enter a number in words: ")
    }
}