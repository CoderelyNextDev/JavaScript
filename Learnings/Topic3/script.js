/*
Loops + Functions
Loops - for and while
Explanation:
Loops allow you to execute a block of code repeatedly. They're essential for automating repetitive tasks and processing collections of data.

*/

// Count  1-5
// for (let i = 1; i <= 5; i++) {
//     console.log("Count: " + i);
// }

for(let i = 1; i <= 5; i++){
    console.log("Count: " + i);
}

// Loop through arrays sample output: Fruit 1: apple

let fruits = ['apple', 'orange', 'grapes', 'banana'];

for(let i = 0; i < fruits.length; i++){
    console.log(`Fruit ${i+1}: ${fruits[i]}`);
}

// counting backward 10-0
for(let i = 10; i > 0; i--){
    console.log(`${i}...`);
}
console.log("GO");

// While loop
let count = 0;
console.log("While loop count");
while(count < 5){
    console.log(count);
    count++;
}

let userInput = "";
let attempts = 0;

while(userInput !== "yes" && attempts < 3){
    attempts++;
    if(attempts === 3){
        userInput = 'yes';
    }
    console.log(`\n\nAttempt ${attempts} : ${userInput}`);
}
console.log("Finaly!");

// Challenge 1A: Print multiplication table
let number = 5;
console.log(`\n\nMultiplication table for ${number}:`);
for(let i = 0; i <= number;i++){
    console.log(`${number} x ${i} = ${number * i}`);
}

 // Challenge 1B: Sum of numbers from 1 to 100
let sum = 0;
console.log("\n\nSum of number from 1 to 100`")
for(let i = 1; i <= 100 ; i++){
    sum +=i;
}
console.log(`Sum of numbers 1-100: ${sum}`);

// Challenge 1C: Find even numbers
console.log("\n\nEven numbers between 1-20:");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Challenge 1D: ALl Odd number between 1-50
console.log('\n\nAll Odd number between 1-50');
for(let i = 1; i <= 50; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

// Challenge 1E - Factorial of a number (5! = 5×4×3×2×1 = 120)
let factorialNum = 5;
let product = 1; 

console.log('\n\nFactorial');

for(let i = factorialNum; i >= 1; i--){ 
    product *= i; 
}
console.log(`Factorial of ${factorialNum} : ${product}`);

// Challenge 1E using recursion 
function factorial(num){
    if(num > 1){
        return num * factorial(num - 1)
    }else{
        return 1;
    }
}
let y = factorial(3);
console.log('factorial using recursion: ', y);
// TODO:: Fibonacci sequence up to 10 numbers
function fibonacci(n){

    if(n <= 1){
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let z = fibonacci(6);
console.log(`The Fibonnaci number is: ${z}`);
// Function Declarations
// Explanation:
// Functions are reusable blocks of code that perform specific tasks. They help avoid code duplication and make programs more organized.

// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Using the function
let message = greet("Alice");
console.log(message); // "Hello, Alice!"

// with paramter
function calculateArea(length, width) {
    return length * width;
}

let area = calculateArea(5, 3);
console.log("Area: " + area); // "Area: 15"

// without return
function showWelcome(userName, age) {
    console.log(`Welcome ${userName}!`);
    console.log(`You are ${age} years old.`);
}

showWelcome("Coderely", 25);
// Output:
// Welcome Coderely!
// You are 21 years old.

// Challenge 2 - FUnction with Math
// Create a function if number is even
function ifEven(n){
    return n % 2 === 0;
}
let isEven = ifEven(4);
console.log(`Is the number even? - ${isEven ? 'Yes' : 'No'}`);

// Challenge 2B: Create a function to find maximum of two numbers
function findMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    return num2;
}
let max = findMax(3,2);
console.log(`The max number of two number is ${max}`);


// Arrow function 
// No parameters
const sayHello = () => "Hello World!";

// Single parameter (parentheses optional)
const double = num => num * 2;

// Multiple parameters
const multiply = (a, b) => a * b;

// Multiple lines
const calculate = (a, b) => {
    let sum = a + b;
    let product = a * b;
    return { sum, product };
};

let numbers = [1,2,3,4,5,6];
// using arrow function and map get the squared of each numbers
let squared = numbers.map(num => num * num);
console.log(squared);

// using arrow function and filter get the even numbers in the array
let even = numbers.filter(num => num % 2 === 0);
console.log(even);

// Final Challenge
/*
Requirements:
1. Product Management
Each product has: name, price, quantity, category

Calculate subtotal for each product (price × quantity)

Calculate total cart value before discounts

2. Discount System
Apply percentage discounts (e.g., 10% off)

Apply fixed amount discounts (e.g., $20 off)

Apply category-specific discounts

Maximum discount should not exceed 50

/*

// Sample output
/*
    🛒 ENHANCED SHOPPING CART
    ========================
    PRODUCTS:
    - Laptop x1: $999.00
    - Mouse x2: $50.00
    - Keyboard x1: $75.00
    - Notebook x3: $45.00

    📊 CART SUMMARY:
    Subtotal: $1169.00
    Discount (10%): -$116.90
    Shipping: $0.00 (Free shipping over $100!)
    Tax (8%): $84.17

    💰 FINAL TOTAL: $1136.27

    🎉 LOYALTY EARNED: 163 points
        (113 points from purchase + 50 bonus points!)
*/

let cartItems = [
    {name: 'Laptop', quantity: 1, price: 20, category: 'electronics'},
    {name: 'Bag', quantity: 1, price: 20, category: 'personal collection'},
    {name: 'Tablet', quantity: 1, price: 20, category: 'electronics'},
]   

function calculateCart(price, quantity){
    let subtotal = price * quantity;

    return {
        subtotal: subtotal,
    }
}
function processCart(cartItems){
    let cartTotal = {
        subtotal: 0,
        discount: 0,
        total: 0
    };

    console.log("\n\n🛒 ENHANCED SHOPPING CART");
    console.log("========================")
    console.log("PRODUCTS:");

    for(let i = 0; i < cartItems.length; i++){
        let items = cartItems[i];
        // The problem I encounter here
        /*
             cartTotal.subtotal += calculateCart(items.price, items.quantity);
             
             which is wrong I need to put it first in the variable then get the value
        */
        let result = calculateCart(items.price, items.quantity);
        cartTotal.subtotal += result.subtotal;
        console.log(`- ${items.name} x${items.quantity}: ₱${items.price}`);
    }
    console.log("\n\n📊 CART SUMMARY:")
    console.log(`Subtotal: ${cartTotal.subtotal}`);
}

processCart(cartItems);