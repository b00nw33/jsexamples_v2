

// import the prompt-sync libary
// const prompt = require("prompt-sync")({ sigint: true });


const tickerSymbols = ["FB", "AAPL", "AMZN", "NFLX", "GOOG"];
// tickerSymbols.forEach(ticker => console.log(ticker));

console.log("\n");
console.log("* ".repeat(30));
console.log("\n");

const sleep = async (delay) => new Promise((resolve) => setTimeout(() => {
    console.log("I am sleeping for 4 seconds.");
    return resolve();
}, delay));

await sleep(4000);
// const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

setTimeout(() => {
    console.log("I've been waiting for 4 seconds.");
}, 4000);