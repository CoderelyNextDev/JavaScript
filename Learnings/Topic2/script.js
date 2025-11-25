// Operators & Conditions
// Control the flow of your program based on conditions.

// if/else statements allow your program to make decisions and execute different code blocks based on conditions.

let age = 15;

if(age >= 18){
    console.log("You are eligible to vote");
}else{
    let needYears = 18 - age;
    console.log("Wait for " + needYears + " years to vote");
}

// Comparison Operators
// Explanation:
// Comparison operators compare two values and return true or false. They are used in conditions to make decisions.

/*
Types of Comparison Operators:
Operator	Description	                        Example
==	        Loose equality (value only)	        5 == "5" // true
===	        Strict equality (value + type)	    5 === "5" // false
!=	        Loose inequality	                5 != "5" // false
!==	        Strict inequality	                5 !== "5" // true
>	        Greater than	                    10 > 5 // true
<	        Less than	                        10 < 5 // false
>=	        Greater than or equal	            10 >= 10 // true
<=	        Less than or equal	                10 <= 9 // false


*/

// example
let inputPassword = "shado";
let storePassword = "shado";
let minLength = 6;

if(inputPassword === storePassword && inputPassword.length >= minLength){
    console.log('Password Accepted');
}else{
    console.log("Invalid Password or too short!");
}

/*
Logical Operators
Explanation:
Logical operators combine multiple conditions and return true or false.

Types of Logical Operators:
Operator	Description	                Example
&&	AND - all conditions must be true	true && false // false
||	OR - at least one condition true	true || false // true
!	NOT - reverses boolean value	!true // false
*/

// sample movie ticket
let age2 = 10;
let hasParent = false;
let isWeekend = true;
let ticketPrice = 10;

if(hasParent || age2 >= 13){
    let finalPrice = isWeekend ?  ticketPrice * 0.8 : ticketPrice;
    console.log("Ticket approved! Price: " + finalPrice);
}else{
    console.log("Sorry You cannot watch this movie!");
}


// Challange

/*
Smart Weather Advisor - Detailed Challenge
Challenge Description
Create a comprehensive weather advisory system that provides personalized recommendations based on multiple weather conditions. The system should analyze:

Weather type (sunny, rainy, cloudy, snowy)

Temperature in Celsius

Wind speed in km/h

Whether it's weekend or not

The advisor should provide specific recommendations for:

Clothing choices

Recommended activities

Safety warnings

Special considerations

Test Combinations to Try
Combination 1: Perfect Beach Day
javascript
let weather = "sunny";
let temperature = 28;
let windSpeed = 8;
let isWeekend = true;
Expected: Beach recommendations, sunscreen warning, outdoor activities

Combination 2: Stormy Weekend
javascript
let weather = "rainy";
let temperature = 18;
let windSpeed = 35;
let isWeekend = true;
Expected: Indoor activities, waterproof clothing, safety warnings

Combination 3: Winter Adventure
javascript
let weather = "snowy";
let temperature = -5;
let windSpeed = 12;
let isWeekend = false;
Expected: Winter gear, snow activities, travel warnings

Combination 4: Chilly Windy Day
javascript
let weather = "cloudy";
let temperature = 8;
let windSpeed = 25;
let isWeekend = true;
Expected: Wind protection, limited outdoor time, indoor alternatives

Combination 5: Pleasant Weekday
javascript
let weather = "cloudy";
let temperature = 20;
let windSpeed = 10;
let isWeekend = false;
Expected: Comfortable outdoor activities, casual clothing

Combination 6: Extreme Conditions
javascript
let weather = "snowy";
let temperature = -15;
let windSpeed = 40;
let isWeekend = true;
Expected: Severe weather warnings, stay indoors, emergency preparedness
*/

let weather = "rainy";  
let temperature = 22;   
let windSpeed = 15;       
let isWeekend2 = true;     
console.log(`🌤️ WEATHER ADVISORY 🌤️`);
console.log(`Conditions: ${weather}, ${temperature}°C, Wind: ${windSpeed} km/h, Weekend: ${isWeekend2}`);
console.log(`================================`);



if (weather === "sunny" && temperature > 20) {
    console.log("👕 CLOTHING: Light t-shirt, shorts, and sunglasses");
    console.log("🏃 ACTIVITIES: Beach day, swimming, picnic, outdoor sports");
    console.log("⚠️  WARNINGS: Use sunscreen SPF 30+, stay hydrated");
    console.log("💡 TIP: Perfect for outdoor photography!");
    
} else if (weather === "rainy") {
    console.log("👕 CLOTHING: Waterproof jacket, umbrella, waterproof shoes");
    console.log("🏃 ACTIVITIES: Museum visit, cinema, indoor games, reading");
    console.log("⚠️  WARNINGS: Watch for slippery surfaces, avoid flooded areas");
    console.log("💡 TIP: Great day for cozy indoor activities!");
    
} else if (weather === "snowy") {
    console.log("👕 CLOTHING: Heavy winter coat, boots, gloves, scarf, hat");
    console.log("🏃 ACTIVITIES: Skiing, snowboarding, building snowman, hot chocolate");
    console.log("⚠️  WARNINGS: Drive carefully, watch for ice, prevent hypothermia");
    console.log("💡 TIP: Check road conditions before traveling!");
    
} else if (temperature < 10 && windSpeed > 20) {
    console.log("👕 CLOTHING: Thermal layers, windproof jacket, warm hat");
    console.log("🏃 ACTIVITIES: Indoor exercises, visiting cafes, library");
    console.log("⚠️  WARNINGS: High wind chill risk, frostbite danger");
    console.log("💡 TIP: Limit outdoor exposure to short periods!");
    
} else if (isWeekend2 && weather !== "rainy" && weather !== "snowy") {
    console.log("👕 CLOTHING: Comfortable casual wear appropriate for temperature");
    console.log("🏃 ACTIVITIES: Weekend brunch, hiking, shopping, family outings");
    console.log("⚠️  WARNINGS: Weekend crowds expected at popular spots");
    console.log("💡 TIP: Make reservations for popular restaurants!");
    
} else if (weather === "cloudy" && temperature >= 15 && temperature <= 25) {
    console.log("👕 CLOTHING: Light jacket or sweater, comfortable shoes");
    console.log("🏃 ACTIVITIES: Walking, cycling, outdoor markets, gardening");
    console.log("⚠️  WARNINGS: UV rays still present even through clouds");
    console.log("💡 TIP: Perfect temperature for extended outdoor activities!");
    
} else {
    console.log("👕 CLOTHING: Dress in layers for changing conditions");
    console.log("🏃 ACTIVITIES: Flexible plans - be ready to adjust");
    console.log("⚠️  WARNINGS: Weather conditions are unpredictable today");
    console.log("💡 TIP: Check weather updates throughout the day!");
}

console.log(`================================`);


/* 
    Key Learning Summary:
    if/else - Make decisions in your code

    Comparison operators - Compare values (===, >, <, etc.)

    Logical operators - Combine conditions (&&, ||, !)

    Best Practices:
    Use === instead of == to avoid unexpected type conversions

    Use parentheses to make complex conditions clearer

    Test your conditions with different input values

    Use descriptive variable names for better readability

*/

