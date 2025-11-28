// ---------
// 1. ARRAYS
// ---------

// Basic array
// This is just an example, the best practice is to store a single data type to an array
const myArray = [1, 2, 3, 4, "Hello", true, null];
console.log(myArray.length);

// B) ARRAY METHODS

// i - map function of an array
// Implement your code here
const mappedArray = [1, 2, 3, 4, 5, 6];
console.log(mappedArray.map(e => e * 10));

// ii - filter function of an array
// Implement your code here
const vowels = ["a", "e", "i", "o", "u"];
// console.log(vowels.filter(e => e === "a" || e === "u"));
console.log(vowels.filter(e => ["a", "u"].includes(e)));

// iii - sort function of an array
// Implement your code here
const nums = [1, 2, 3, 4, 5, 6];
const names = ["James", "Chris", "Max", "Lenon"];

// Sort by descending order
// Implement your code here
const descendNums = nums.sort((a, b) => a > b ? -1 : 1);
console.log(descendNums);

// Sort by ascending order
// Implement your code here
const ascendNums = nums.sort((a, b) => a - b);
console.log(ascendNums);

const descendNames = names.sort((a, b) => b - a);
console.log(descendNames);

// Shortcut
console.log(names.sort().reverse())

// iv - reduce function of an array
// Implement your code here
const numbers = new Array(1, 2, 3, 4);
const prod = numbers.reduce((a, b) => a * b);
console.log(prod);

// another approach of applying a reuduce function of an array
// Implement your code here
const arr = new Array(2, 3, 4, 5);

function product(a, b) {
    return a * b;
}

const resultOfProduct = arr.reduce(product);
console.log(resultOfProduct);

// append elements to an EXISTING array
const teamList = ["Tanna", "Shalyn", "Zhang", "Francis"];
teamList.push("Muhaimin");
console.log(teamList.length);
console.log(teamList);

teamList.pop();
console.log(teamList.length);
console.log(teamList);


// shift and unshift
const mag7 = ["FB", "AMZN", "AAPL", "NFLX", "GOOG"];

console.log(mag7.shift());
console.log(mag7);

mag7.unshift("MSFT");
console.log(mag7);

mag7.unshift("META", "NVDA");
console.log(mag7);

// splice data
const bballTeam = ["Jordan", "Pippen", "Bill"];
const index = 2;
const newPlayer = "Steve Carr";
bballTeam.splice(index, 0, newPlayer);
console.log(bballTeam)

// ? Replace "Bill" with "Rodman"
// bballTeam.splice(3, 1, "Rodman");
bballTeam.splice(3, 1, "Rodman");
console.log(bballTeam)
console.log(bballTeam)

// ---------
// 2. LOOPS
// ---------

// i - for loops (Simulate a countdown using a for loop)
// Implement your code here


// ii - for-each loop
// Implement your code here


// iii - do-while loop (execute first, check for the condition later)
// Implement your code here


// iv - while loop (check the conditions first before running the while loop)
// Implement your code here