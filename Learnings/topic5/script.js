//Objects are collections of key-value pairs that store related data. They're perfect for representing real-world entities.
let movie = {
  name: "Avatar",
  year: 2009,
  director: "James Cameron",
  rating: 7.8
};

// Dot notation (most common)
console.log(movie.name);     // "Avatar"
console.log(movie.year);     // 2009

// Bracket notation (useful for dynamic keys)
console.log(movie["name"]);  // "Avatar"

let property = "director";
console.log(movie[property]); // "James Cameron"

let newMovie = {
  title: "Inception",
  year: 2010,
  director: {
    name: "Christopher Nolan",
    age: 50
  },
  cast: ["Leonardo DiCaprio", "Marion Cotillard"]
};

console.log(newMovie.director.name); // "Christopher Nolan"
console.log(newMovie.cast[0]);       // "Leonardo DiCaprio"

let oneMovie = {
  name: "Avatar",
  year: 2009,
  rating: 7.8
};

// Update existing properties
oneMovie.year = 2010;
oneMovie.rating = 7.9;

console.log(oneMovie);
// { name: "Avatar", year: 2010, rating: 7.9 }

// Add new properties
movie.genre = "Sci-Fi";
movie.budget = "237 million";

console.log(movie);

delete movie.budget;
console.log(movie.budget); // undefined

// Topic 3: Array of Objects (Very Important!)
// Explanation:
// This is the most common data structure you'll work with, especially when dealing with APIs.

// Creating Array of Objects:
// javascript
let movies = [
  { 
    title: "Avatar", 
    year: 2009, 
    rating: 7.8,
    genres: ["Action", "Adventure", "Sci-Fi"]
  },
  { 
    title: "The Dark Knight", 
    year: 2008, 
    rating: 9.0,
    genres: ["Action", "Crime", "Drama"]
  },
  { 
    title: "Inception", 
    year: 2010, 
    rating: 8.8,
    genres: ["Action", "Adventure", "Sci-Fi"]
  }
];

// Get first movie title
console.log(movies[0].title); // "Avatar"

// Get second movie's first genre
console.log(movies[1].genres[0]); // "Action"

// Loop through all movies
movies.forEach(movie => {
  console.log(`${movie.title} (${movie.year}) - Rating: ${movie.rating}`);
});

let movie = {
  title: "Avatar",
  year: 2009,
  rating: 7.8,
  
  // Method (function inside object)
  getInfo: function() {
    return `${this.title} (${this.year}) - Rating: ${this.rating}`;
  },
  
  // Shorter syntax (ES6)
  isClassic() {
    return this.year < 2000;
  }
};

console.log(movie.getInfo()); // "Avatar (2009) - Rating: 7.8"
console.log(movie.isClassic()); // false