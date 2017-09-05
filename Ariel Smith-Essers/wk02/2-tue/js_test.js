// JS Variables
// 1.
var captain = "Jack";

// 2.
var phrase = "Oh " + captain + ", my " + captain + "!";

// JS Conditionals
var souls = 3;
var lifeRafts = 2;

// 1.
if (souls > lifeRafts) {
  console.log("SOS!");
}

// Data Structures - JS Arrays
// 1.
var weekend = ["Saturday"];

// 2.
weekend.push("Sunday");

// 3.
weekend.unshift("Friday");

// 4.
var day = weekend[1];

// 5.
weekend.splice(0, 0);

// Data Structures - JS Objects
// 1.
var brain = {
  energyLevel: 10
};

// 2.
var energy = brain.energyLevel;

// 3.
brain.dreams = 'electric sheep';

// JS Functions
// 1.
var calcRectangleArea = function(length, width) {
  return length * width;
}

// 2.
var rectangleArea = calcRectangleArea(3, 4);

// 3.
// The global variable 'fruits' gets modified as the local variable 'arr' is essentially a stand-in for whatever variable you are going to parse into the function. When the code 'addFruit(fruits);' is written, the 'addFruit' function is being told that anywhere 'arr' appears it should be replaced with the global variable 'fruits'. As such the function runs substituting the 'arr' variable with the 'fruits' variable.
