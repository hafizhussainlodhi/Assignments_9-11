// =============================================
// Chapter 6 - USER INPUT & CONDITIONAL STATEMENT
// =============================================

// 1. City name
var city = prompt("Enter your city name:");
if (city && city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights!");
}

// 2. Gender
var userGender = prompt("Enter your gender (male/female):");
if (userGender && userGender.toLowerCase() === "male") {
    alert("Good Morning Sir");
} else if (userGender && userGender.toLowerCase() === "female") {
    alert("Good Morning Ma’am");
}

// 3. Traffic signal
var color = prompt("Enter traffic signal color (red/yellow/green):");
if (color) {
    color = color.toLowerCase();
    if (color === "red") {
        alert("Must Stop");
    } else if (color === "yellow") {
        alert("Ready to move");
    } else if (color === "green") {
        alert("Move now");
    } else {
        alert("Invalid color entered!");
    }
}

// 4. Fuel check
var fuel = +prompt("Enter remaining fuel in litres:");
if (fuel <= 0.25) {
    alert("Please refill the fuel in your car");
}

// 5. Condition checks
var a = 4;
if (++a === 5) {
    alert("Condition for variable a is TRUE"); // Runs 
}

var b = 82;
if (b++ === 83) {
    alert("Condition for variable b is TRUE"); // Will NOT run 
}

