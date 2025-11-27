// Arrays (map, filter)Arrays (map, filter)
// The .map() method creates a new array by applying a function to every element in the original array. It doesn't change the original array.

// basic example
// Double number and convert to uppercase
let numbers = [1, 2, 3, 4, 5];
let names = ["mark", "ange", "ash"];

let squared = numbers.map((num) => num * num);
console.log("Squared: ", squared);
let uppercase = names.map((name) => name.toUpperCase());
console.log("To Uppercase: ", uppercase);

// adding property to array object
let products = [
  { name: "Redmi", price: 100 },
  { name: "Xiaomi", price: 300 },
  { name: "Techno", price: 500 },
];

// map the array, reassign and add property and value of every object
let productWithTax = products.map((prod) => {
  return {
    name: prod.name,
    price: prod.price,
    tax: prod.price * 0.8,
    total: prod.price * 1.8,
  };
});

console.log("Adding property to object: ", productWithTax);

// Map has index paramter
let withIndex = productWithTax.map((prod, index) => {
  return `#${index + 1},Product: ${prod.name}, Price: ${prod.price}`;
});

console.log(withIndex);

// Array.filter()
// The .filter() method creates a new array with all elements that pass a test (return true). It doesn't change the original array.

// Syntax
// const newArray = originalArray.filter((currentValue, index, array) => {
//     return condition; // true to keep, false to remove
// });

// sample
// Filter even numbers
const nums = [1, 2, 3, 4, 5];

// Filter by string length
const animals = ["cat", "dog", "rabbit"];

let filterEven = nums.filter((num) => num % 2 === 0);
console.log("Filter even numbers: ", filterEven);

let shortWord = animals.filter((animals) => animals.length < 4);
console.log("Short Word of animals: ", shortWord);

// Filter Object

let students = [
  {name: 'Mark', age: 21, passed: false},
  {name: 'Ange', age: 20, passed: true},
  {name: 'Ash', age: 20, passed: true},
  {name: 'Riben', age: 21, passed: true},
];
// Show student who passed
let studentPass = students.filter(stud => stud.passed);
console.log("Student who passed: ", studentPass);

// Show student who passed and age 21
let studentPassWithAge = studentPass.filter(stud => {
  return stud.passed && stud.age === 21;
});

console.log("Student Pass age of 21: ", studentPassWithAge);
const pisoRate = 56;
// Give the product price USD AND PHP
let productWithRates = products.map(prod => {
  return {
    name: prod.name,
    priceUsd: `$${prod.price}`,
    pricePeso: `₱${(prod.price * pisoRate).toLocaleString()}`,
    exchangeRate: `1 USD = ${pisoRate}`
  }
});
console.log(`Product With Rates: ${JSON.stringify(productWithRates)}`);
// Why we use JSON stringify
/*
When you use backticks (template literals) or the + operator with an array of objects, JavaScript tries to convert the array to a string. The default string conversion for a plain object is the useless text [object Object].


To fix this, either:

Use JSON.stringify(array) to get the full data as a formatted string.


Pass the array directly to console.log(array) to let the console display it interactively.
*/
// Note: The Number.prototype.toLocaleString() method converts a number into a locale-specific string representation. It can handle formatting for currency, percentages, and plain numbers, applying appropriate separators and symbols based on the locale.

let number = 10000;
console.log("ToLocaleString function");
// Default locale
console.log(number.toLocaleString()); // e.g., "1,234,567.89" (US English)

// German locale (uses comma as decimal separator)
console.log(number.toLocaleString('de-DE')); // "1.234.567,89"

// Currency formatting (US dollars)
console.log(number.toLocaleString('en-US', { style: 'currency', currency: 'USD' })); // "$1,234,567.89"

// Percentage formatting
console.log((0.75).toLocaleString('en-US', { style: 'percent' })); // "75%"

//  Movie Filter using .filter()
// Get movies with rating > 8
let movies = [
    { title: "The Shawshank Redemption", rating: 9.3, year: 1994 },
    { title: "The Godfather", rating: 9.2, year: 1972 },
    { title: "The Dark Knight", rating: 9.0, year: 2008 },
    { title: "Pulp Fiction", rating: 8.9, year: 1994 },
    { title: "Forrest Gump", rating: 8.8, year: 1994 },
    { title: "Inception", rating: 8.8, year: 2010 },
    { title: "The Matrix", rating: 7.0, year: 1999 },
    { title: "Goodfellas", rating: 7.0, year: 1990 }
];

let topMovies = movies.filter(movie => movie.rating > 8);
console.log('Top movies');
topMovies.forEach(movie => {
  console.log(`- ${movie.title} - ${movie.year} - ${movie.rating}/10`);
});

// filter movies multi condition
let topMoviesYearFilter = movies.filter(movie => {
  return movie.rating > 8 && movie.year > 2000;
});

console.log('Top movies Release on year 2000 and above');
topMoviesYearFilter.forEach(movie =>{
  console.log(`- ${movie.title} - ${movie.year} - ${movie.rating}/10`);
})

//// Process: Get only available electronics, then apply 10% discount
let newProducts = [
    { name: "Laptop", category: "electronics", price: 999, inStock: true },
    { name: "T-shirt", category: "clothing", price: 25, inStock: true },
    { name: "Phone", category: "electronics", price: 500, inStock: false },
    { name: "Jeans", category: "clothing", price: 45, inStock: true },
    { name: "Headphones", category: "electronics", price: 150, inStock: true },
    { name: "Shoes", category: "clothing", price: 80, inStock: false }
];

let availableElectronics = newProducts.filter(prod => {
  return prod.category === 'electronics' && prod.inStock
}).map(prod => {
  return {
    name: prod.name,
    originalPrice: prod.price,
    discount: prod.price * 0.9,
    savings: prod.price * 0.1
  }
});

console.log("Available Electronics");
availableElectronics.forEach(prod => {
  console.log(`Product Name: ${prod.name} - Original Price: ${prod.originalPrice} - With Discount: ${prod.discount} - You saved: ${prod.savings}`);
});
/*
Key Takeaways:
.map() - When you want to transform every element

.filter() - When you want to select specific elements

Both return new arrays - Original array stays unchanged

Chain them together for complex data processing
*/

// Bonus
/* reduce() is a JavaScript array method that combines all the elements of an array into a single value.
*/
/*
Why do we use reduce()?

Because it is perfect for any task where you need to convert an array into a single result.

Common uses:
*/
const NewNumbers = [10, 20, 30];
const fruits = ["apple", "banana", "apple"];
//Sum values
const sum = NewNumbers.reduce((a, b) => a + b, 0);
console.log("Sum: ", sum);
// Find Average
const average = NewNumbers.reduce((a,b) => a + b, 0) / NewNumbers.length;
console.log("Average of numbers ", average);
//Count occurrences
const count = fruits.reduce((acc,fruit) => {
// Start with empty whiteboard: {}
// First fruit: "apple" → Write "apple: 1" on whiteboard → {apple: 1}
// Second fruit: "banana" → Write "banana: 1" on whiteboard → {apple: 1, banana: 1}
// Third fruit: "apple" → Find "apple" and change "1" to "2" → {apple: 2, banana: 1}

// acc[fruit] = (acc[fruit] || 0) + 1;
/*
  Check if fruit exists: (acc[fruit] || 0)

  If acc[fruit] exists, use its value

  If it doesn't exist, use 0

  Add 1: ... + 1

  Increase the count by 1
*/
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
},{});

console.log(count);

//Flatten arrays
const nested = [[1, 2], [3, 4]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);

//Build an object from an array
const users = [
  { id: 1, name: "Sam" },
  { id: 2, name: "John" }
];

const userMap = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
}, {});

// final Exercise
const studentScores = [72, 85, 90, 60, 78, 88];

const aboveScoreAverage = studentScores.filter(score => {
  const average = (studentScores.reduce((a,b) => a+b, 0) / studentScores.length).toFixed(2);
  return score > average;
});

console.log(`Average Scores: ${(studentScores.reduce((a, b) => a + b) / studentScores.length).toFixed(2)}`);
console.log(`Scores that are above Average: ${aboveScoreAverage}`);