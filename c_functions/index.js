function ftnGreeting(salutation, user) {
    // const msg = "Hi, " + salutation + " " + user;
    const msg = `Hi, ${salutation} ${user}`;
    return msg;
}

const result = ftnGreeting("Mr.", "Jones");
console.log(result);


// Equip fn to handle non-existant ARGUMENTS (passed to its parameters)
function ftnAdd(a, b) {
    const result = a + b;
    return result;
}

const sum = ftnAdd(10, 5);          // fn sends over 2 ARGUMENTS
console.log(sum);


const anotherSum = ftnAdd();        // Passing in ZERO arguments
console.log(typeof anotherSum);

const res = (function(){}).constructor === Function;
console.log(res);

// 3. Arrow Function
const anotherFtnGreeting = (salutation = "", name = "") => {

    // Handle empty strings
    if (salutation.length == 0 && name.length == 0)
        return "Please enter your salutation and name.";

    // Otherwise, return appropriate feedback
    return `Hello, ${salutation} ${name}. Welcome to Generation Bootcamp.`;
}

console.log(anotherFtnGreeting("Ms.", "Fareeda"));
console.log(anotherFtnGreeting());