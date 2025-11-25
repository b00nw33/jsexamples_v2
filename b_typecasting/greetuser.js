// import the prompt-sync libary
const prompt = require("prompt-sync")({ sigint: true });

function greetUser() {
  let userName = prompt("Please enter your name: ");

  if (userName.trim()) {
    console.log(`Welcome to FSD, ${userName}!!!`);
  } else {
    console.log("We did not receive your name.");
  }}
}

greetUser();
