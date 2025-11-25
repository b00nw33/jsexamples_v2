// 1. Primitive Data Type

let pi = 3.142;
console.log(pi);
console.log(typeof pi);

let strValue = "Hello";
console.log(strValue);
console.log(typeof strValue);

let boolValue = true;
console.log(boolValue);
console.log(typeof boolValue);


let nullValue = null;
console.log(nullValue);
console.log(typeof nullValue);

let undefinedValue;
console.log(undefinedValue);
console.log(typeof undefinedValue);

// 2. Non-primitive Types

let arr = ["a", "b", "c"];
console.log(arr);
console.log(typeof arr);

let faang = new Array();
faang[0] = "Facebook";
faang[1] = "Amazon";
console.log(faang);
console.log(faang[0]);

let person = {
	name: "Sam",
	age: 42,
}

console.log("Name:", person.name);
console.log(`Age: ${person.age}`);

let vehicle = new Object();
vehicle.name = "Suzuki";
vehicle.model = "Swift";
vehicle.wheels = 10;
console.log(vehicle);

let announce = function () {console.log("announce is an object.")};
announce();

let announce2 = () => {
	console.log("announce2 invoked.");
}
announce2();

// 3. Declaring variables using let, const and var
const PI = 3.14159;
// PI = 3.142;
console.log(PI);

function greet() {
	let greeting = "Welcome FSD learners";
	console.log(greeting);
}

// console.log(greeting);
console.log(typeof greet);


var globalMsg = "Global scope";

function welcome() {
	var localMsg = "Local scope";
	console.log(localMsg);
}

// console.log(localMsg);


// 4. Typecasting

// Values to numbers
console.log(Number("3.142"));
console.log(Number("Math.PI"));
console.log(Number("       "));
console.log(Number(""));
console.log(Number("88 88"));
console.log(Number("Steve"));



console.log(String(new Date()));
console.log(String("98765"));
console.log(String(98765));

console.log(String("98765"));
console.log(String("98765"));

