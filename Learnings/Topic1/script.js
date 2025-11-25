// Variable

// What is a variable ? why we need variable? Where to use variable? How to use variable in javascript?
// What is variable? 
/* 
    think variable as container the holds or store data then can use later using its name 
*/

// Why we need variable
/*
    Store data - temporary hold values and use later
    reuse data - allow value to be use mulitple times without duplication
    manage state - track changes in programs for example scores
    write dynamic code - enables the program to behave differently based on store values 
*/

// Where to use variables
/*
    Mathimatical caluclations
    dynamic content
    control flow 
    loops
*/

// How to use variables in JavaScript?
// let Use for values that change.

// const: Use for values that never change.
// var (older keyword): Avoid in modern code. 

// Rules for Naming Variables:
// Use letters, digits, _, or $.

// Cannot start with a digit.

// Case-sensitive (myVar ≠ myvar).

// Avoid reserved keywords (e.g., let, if).

// Developer avoid using var keyword in declaring variable it cause bugs in real projects
/*
    var ignore block scope and const and let obey block scope
    what is block scope? 
    a block is anything inside{}

    for example:
*/
// since var ignore block scope it can access globaly
if(true){
    var x = true;
}

console.log(true);

// here let obey block scope so it can only access inside the block 
if(true){
    let y = true;
}

// console.log(y);

// Second reason is var allows redeclaration
var name = "MyName";
var name = "Your name";

console.log(name)

let age = 10;
// third reason the var that declared using var  keyword it get to the top of the scope before code run, but without its value

console.log(isStudent) 
var isStudent = true; 

console.log(isTrue);
let isTrue = true;

// Different between let and const and where to use let and const
/*
    use const if the value wouln't change or fixed 
*/
const PI = 3.14;

/*
    use let if the value will change
*/

let score = 0; 

/* 

Best practice experts use:

Use const by default

Use let only when the value changes

Avoid var completely in new code

How const works with arrays and objects
- you cannot reasign the variable but you can
modify the content inside

because const protect the reference, not the data

You can't replacce a whole array with new one but you 
can modify what is inside

Technical explanation 
const user = { name: "Sam" };


Here’s what happens under the hood:

The variable user stores a reference (pointer) to an object in memory

const prevents changing that reference

But modifying user.name updates the object’s internal fields

You are not replacing the object — you are editing its properties
*/

//# data types
// data type specify what kind of data can be stored and manipulated in a variable. However Javascript is dynamically type language meaning variables can hold any type of data without explicit type declaration

// Two Types of data type
// Primitive Data type (Immutable) - meaning value can change
/*
    String, Number, Boolean,
    Undefined, BigInt, Null , Symbol

*/

// Non-Primitive (Mutable) - meaning value cannot be change 
/*
    Array, Object, Function
*/

// Example
// String
let userName = "Alice";
let welcomeMessage = `Welcome, ${userName}!`;

// Number
let userAge = 25;
let temperature = 23.5;

// Boolean
let isActive = true;
let hasPermission = false;

// Array
let hobbies = ["reading", "gaming", "coding"];

// Object
let user = {
    name: "Bob",
    age: 30,
    email: "bob@example.com"
};

// Function
function calculateArea(width, height) {
    return width * height;
}

// Dynamic Typing - variable can change to any data type

let dynamicVariable = "Hello";  // string
console.log(typeof dynamicVariable); // "string"

dynamicVariable = 42;          // now it's a number
console.log(typeof dynamicVariable); // "number"

dynamicVariable = true;        // now it's a boolean
console.log(typeof dynamicVariable); // "boolean"

dynamicVariable = { name: "John" }; // now it's an object
console.log(typeof dynamicVariable); // "object"

// Type conversion
// Explicit conversion
let stringToNumber = Number("123");     // 123 (number)
let numberToString = String(123);       // "123" (string)
let boolToString = String(true);        // "true" (string)

// Implicit conversion (type coercion)
let result1 = "5" + 2;   // "52" (string concatenation)
let result2 = "5" - 2;   // 3 (number subtraction)

/*
Key Points to Remember
Primitive types are immutable - when you "change" them, you create a new value

Non-primitive types are mutable - you can modify their content

typeof null returns "object" - this is a known JavaScript bug

Use Array.isArray() to check if something is an array

JavaScript automatically converts types in many cases (type coercion)

*/