``javascript
// =============================================================================
// 📁 JavaScript Fundamentals: A Comprehensive Guide for React Preparation
// Author: Wada Abera (Reorganized, Enhanced, and Corrected for Runnability)
// Description: This file covers essential JavaScript concepts for React, ensuring
//              all code is runnable in Node.js without external dependencies.
// Date: June 24, 2025
// =============================================================================

// =============================================================================
// 🔐 Section 1: Bitwise Operations for Permissions
// Explanation: Bitwise operators (`|`, `&`) manipulate permissions using binary.
//              Useful for managing flags in complex React apps.
const readPermission = 4; // Binary: 100
const writePermission = 2; // Binary: 010
const executePermission = 1; // Binary: 001

let userPermission = 0;
// Combine permissions with `|` (bitwise OR): 000 | 100 | 010 = 110 (6)
userPermission = userPermission | readPermission | writePermission;
console.log("User Permission (Binary Combined):", userPermission); // Output: 6

// Check specific permission with `&` (bitwise AND)
let message = (userPermission & readPermission)
  ? "You have read permission"
  : "You don't have read permission";
console.log("Permission Check:", message); // Output: You have read permission

// =============================================================================
// 🚗 Section 2: Object Literals
// Explanation: Objects store key-value pairs, representing entities like cars or
//              users. In React, objects are used for props and state.
const car1 = { name: "Toyota", model: "Corolla", year: 2005 };
const car2 = { name: "Vitz", model: "Mask", year: 2006 };
const car3 = { name: "Honda", model: "Civic", year: 2007 };
console.log("Car 1 Details:", car1); // Output: { name: "Toyota", model: "Corolla", year: 2005 }

// Accessing object properties: dot or bracket notation
const person = {
  name: "Wada",
  age: 20,
  nationality: "Ethiopian",
  city: "Jimma",
  job: "Software Engineer",
};
console.log("Person's Age:", person.age); // Dot notation
console.log("Person's City:", person["city"]); // Bracket notation
console.log("Person's Job:", person.job); // Output: Software Engineer

// =============================================================================
// 🧩 Section 3: Object Destructuring
// Explanation: Destructuring extracts object properties into variables, simplifying
//              code. In React, it's used to access props concisely.
const car = {
  model: "Corolla",
  year: "2005",
  price: 222200000,
  color: "Red",
};

// Manual extraction (without destructuring)
const carModel = car.model;
const carYear = car.year;
console.log("Manual Extraction:", carModel, carYear); // Output: Corolla 2005

// Destructuring (cleaner approach)
const { model, year, price, color } = car;
console.log("Destructured Extraction:", model, year, price, color); // Output: Corolla 2005 222200000 Red

// =============================================================================
// 🧠 Section 4: var vs let (Scope Differences)
// Explanation: `var` is function-scoped; `let` is block-scoped. `let` prevents
//              variable leaks, crucial for predictable React components.
function demonstrateScope() {
  for (var i = 0; i < 3; i++) {
    console.log("Inside var loop:", i); // Output: 0, 1, 2
  }
  console.log("Outside var loop:", i); // Output: 3 (var leaks)

  for (let j = 0; j < 3; j++) {
    console.log("Inside let loop:", j); // Output: 0, 1, 2
  }
  // console.log("Outside let loop:", j); // Error: j is not defined
}
demonstrateScope();

// =============================================================================
// 🧑‍🏫 Section 5: Regular Functions vs Arrow Functions
// Explanation: Regular functions and arrow functions differ in syntax and `this`.
//              Arrow functions are concise, ideal for React event handlers.
function sayHello() {
  console.log("Regular Function: Akkam naga jirtuu!");
}
sayHello(); // Output: Regular Function: Akkam naga jirtuu!

const greetJimma = () => {
  console.log("Arrow Function: Warri Jimma akkam jirtuu?");
};
greetJimma(); // Output: Arrow Function: Warri Jimma akkam jirtuu?

// Single-statement arrow function (implicit return)
const akk = () => console.log("Short Arrow: Jirra jirtuu!");
akk(); // Output: Short Arrow: Jirra jirtuu!

// =============================================================================
// 📚 Section 6: Anonymous Functions
// Explanation: Anonymous functions (no name) are used as callbacks or stored in
//              variables. Common in React for inline event handlers.
const greetUser = function () {
  console.log("Anonymous Function: Hello, stored in variable!");
};
greetUser(); // Output: Anonymous Function: Hello, stored in variable!

// Anonymous function in setTimeout
setTimeout(function () {
  console.log("Anonymous in setTimeout: Runs after 2 seconds!");
}, 2000);

// Anonymous function in array method (map)
const numberArray = [1, 3, 4, 56];
const doubledArray = numberArray.map(function (number) {
  return number * 2;
});
console.log("Anonymous in map:", doubledArray); // Output: [2, 6, 8, 112]

// Arrow function as anonymous
const greeting = () => console.log("Arrow Anonymous: Akkam jirtuu!");
greeting(); // Output: Arrow Anonymous: Akkam jirtuu!

// =============================================================================
// 🔁 Section 7: Array Methods (map, filter, forEach, find)
// Explanation: Array methods enable functional programming, essential for rendering
//              lists and manipulating data in React components.

// map(): Transforms each element, returns new array
const products = ["product1", "product2", "product3"];
const displayItems = products.map((product) => `<li>${product}</li>`);
console.log("Mapped HTML Items:", displayItems); // Output: ["<li>product1</li>", "<li>product2</li>", "<li>product3</li>"]

const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map((num) => num * 2);
console.log("Mapped Doubled Numbers:", doubledNumbers); // Output: [2, 4, 6, 8]

// filter(): Returns elements matching condition
const numbers3 = [2, 5, 8, 9, 10];
const evenNumbers = numbers3.filter((num) => num % 2 === 0);
console.log("Filtered Even Numbers:", evenNumbers); // Output: [2, 8, 10]

// forEach(): Executes function for each element
numbers.forEach((num) => console.log("forEach Number:", num)); // Output: 1, 2, 3, 4

// find(): Returns first matching element
const people = [
  { name: "Wada", age: 20 },
  { name: "Lensa", age: 22 },
  { name: "Tsega", age: 20 },
];
const personFound = people.find((p) => p.age === 20);
console.log("find() Result:", personFound); // Output: { name: "Wada", age: 20 }

// filter() vs find(): filter returns all matches
const peopleAge20 = people.filter((p) => p.age === 20);
console.log("filter() Result:", peopleAge20); // Output: [{ name: "Wada", age: 20 }, { name: "Tsega", age: 20 }]

// =============================================================================
// 🌐 Section 8: Spread Operator
// Explanation: Spread operator (`...`) copies arrays/objects, used in React for
//              merging props, cloning state, or passing multiple arguments.
const array1 = [1, 2, 3];
const array2 = [8, 9, 10];
const combinedArray = [...array1, 6, 7, ...array2];
console.log("Spread Array:", combinedArray); // Output: [1, 2, 3, 6, 7, 8, 9, 10]

const person1 = { name: "Wada", age: 20 };
const person2 = { lname: "Abera", city: "Addis Ababa" };
const combinedPerson = { ...person1, ...person2, country: "Ethiopia" };
console.log("Spread Object:", combinedPerson); // Output: { name: "Wada", age: 20, lname: "Abera", city: "Addis Ababa", country: "Ethiopia" }

// =============================================================================
// ✅ Section 9: Conditional Logic (if/else vs Ternary)
// Explanation: Conditionals control flow. Ternary operators are concise, used in
//              React for conditional rendering.
const age = 20;
let message1 = "";
if (age >= 18) {
  message1 = "You are eligible to vote.";
} else {
  message1 = "You are not eligible to vote.";
}
console.log("if/else Result:", message1); // Output: You are eligible to vote.

const message2 = age >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
console.log("Ternary Result:", message2); // Output: You are eligible to vote

// =============================================================================
// 📞 Section 10: Callback Functions
// Explanation: Callbacks are functions passed as arguments, executed later. In
//              React, they're used for event handlers and async operations.
function processUserInput(callback) {
  const name = "Wada";
  callback(name);
}
processUserInput((userName) => console.log("Callback Welcome:", userName)); // Output: Callback Welcome: Wada

// Callback with setTimeout (note: output appears after 3 seconds)
function hello() {
  setTimeout(() => {
    console.log("Callback: Hello, how are you?");
  }, 3000);
}
function goodbye() {
  console.log("Callback: Goodbye, how are you?");
}
hello(); // Runs after 3 seconds
goodbye(); // Runs immediately

// Sequential callbacks
function goodbyOromia(callback) {
  console.log("First Callback: Goodbye Oromia!");
  callback();
}
function helloOromia() {
  console.log("Second Callback: Hello Oromia!");
}
goodbyOromia(helloOromia); // Output: First Callback, then Second Callback

// Callback with computation
function add(a, b, callback) {
  const sum = a + b;
  callback(sum);
}
function displayResult(sum) {
  console.log("Callback Sum:", sum);
}
add(5, 10, displayResult); // Output: Callback Sum: 15

// Chained callbacks for sequential tasks (total delay: 6 seconds)
function task1(callback) {
  setTimeout(() => {
    console.log("Task 1: Completed");
    callback();
  }, 2000);
}
function task2(callback) {
  setTimeout(() => {
    console.log("Task 2: Completed");
    callback();
  }, 3000);
}
function task3(callback) {
  setTimeout(() => {
    console.log("Task 3: Completed");
    callback();
  }, 1000);
}
task1(() => {
  task2(() => {
    task3(() => {
      console.log("All Tasks: Completed Successfully!");
    });
  });
});

// =============================================================================
// ⏱️ Section 11: Promises
// Explanation: Promises manage async operations, cleaner than callbacks. In React,
//              they're used for fetching data from APIs. (Total delay: 6 seconds)
function burden1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise: Burden 1 Completed");
      resolve();
    }, 2000);
  });
}
function burden2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise: Burden 2 Completed");
      resolve();
    }, 3000);
  });
}
function burden3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Promise: Burden 3 Completed");
      resolve();
    }, 1000);
  });
}

// Chaining promises
burden1()
  .then(() => burden2())
  .then(() => burden3())
  .then(() => console.log("All Promises: Completed Successfully!"));

// =============================================================================
// 🚀 Section 12: Async/Await
// Explanation: Async/await simplifies promise-based code, making it read like
//              synchronous code. Essential for React data fetching. (Total delay: 6 seconds)
async function runAllBurdens() {
  await burden1(); // Waits 2 seconds
  await burden2(); // Waits 3 seconds
  await burden3(); // Waits 1 second
  console.log("Async/Await: All Burdens Completed!");
}
runAllBurdens();

// =============================================================================
// 🎯 Section 13: Event Handling
// Explanation: Event handlers respond to user actions (clicks, inputs). In React,
//              they're attached to JSX elements using onClick, onChange, etc.
// Note: DOM-based event listeners (e.g., document.createElement) are browser-specific
//       and won't work in Node.js. Below, we simulate event handlers for Node.js.
function setupEventListeners() {
  // Simulate event handlers (browser example commented out)
  /*
  const button = document.createElement("button");
  button.textContent = "Click Me";
  document.body.appendChild(button);
  button.addEventListener("click", handleClick);
  button.addEventListener("mouseover", handleMouseOver);
  */

  // Regular function as event handler
  function handleClick() {
    console.log("Event: Button clicked with regular function!");
  }

  // Arrow function as event handler
  const handleMouseOver = () => {
    console.log("Event: Mouse over button with arrow function!");
  };

  // Simulate event triggers for Node.js
  handleClick(); // Output: Event: Button clicked with regular function!
  handleMouseOver(); // Output: Event: Mouse over button with arrow function!
}
setupEventListeners();

// =============================================================================
// 📝 Section 14: Template Literals
// Explanation: Template literals (backticks) allow string interpolation and
//              multiline strings. In React, they're used for dynamic JSX content.
const userName = "Wada";
const userCity = "Jimma";

// Basic string concatenation
const greetingOld = "Hello, " + userName + " from " + userCity + "!";
console.log("Old Concatenation:", greetingOld); // Output: Hello, Wada from Jimma!

// Template literal
const greetingNew = `Hello, ${userName} from ${userCity}! Welcome to React.`;
console.log("Template Literal:", greetingNew); // Output: Hello, Wada from Jimma! Welcome to React.

// Multiline template literal
const bio = `
  Name: ${userName}
  City: ${userCity}
  Goal: Learn React
`;
console.log("Multiline Template Literal:", bio);
// Output:
// Name: Wada
// City: Jimma
// Goal: Learn React

// =============================================================================
// ⚙️ Section 15: Default and Rest Parameters
// Explanation: Default parameters set fallback values; rest parameters collect
//              remaining arguments. Both are useful in React for flexible functions.

// Default parameters
function greetUser(name = "Guest", city = "Unknown") {
  console.log(`Default Params: Welcome, ${name} from ${city}!`);
}
greetUser(); // Output: Default Params: Welcome, Guest from Unknown!
greetUser("Wada", "Jimma"); // Output: Default Params: Welcome, Wada from Jimma!

// Rest parameters
function sumNumbers(...numbers) {
  const total = numbers.reduce((sum, num) => sum + num, 0);
  console.log("Rest Params Sum:", total);
}
sumNumbers(1, 2, 3); // Output: Rest Params Sum: 6
sumNumbers(10, 20, 30, 40); // Output: Rest Params Sum: 100

// =============================================================================
// 📊 Section 16: Array Reduce Method
// Explanation: reduce() accumulates array elements into a single value. In React,
//              it's used for computing derived state or aggregating data.
const scores = [10, 20, 30, 40];

// Sum using reduce
const totalScore = scores.reduce((sum, score) => sum + score, 0);
console.log("Reduce Sum:", totalScore); // Output: Reduce Sum: 100

// Find max value using reduce
const maxScore = scores.reduce((max, score) => (score > max ? score : max), scores[0]);
console.log("Reduce Max:", maxScore); // Output: Reduce Max: 40

// Reduce with objects
const items = [
  { id: 1, price: 100 },
  { id: 2, price:200 },
  { id: 3, price: 300 },
];
const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
console.log("Reduce Object Prices:", totalPrice); // Output: Reduce Object Prices: 600

// =============================================================================
// 🔒 Section 17: Closures
// Explanation: Closures allow inner functions to access outer function variables
//              even after the outer function finishes. In React, they're used for
//              private state or memoized functions.
function createCounter() {
  let count = 0; // Private variable
  return function () {
    count += 1;
    console.log("Closure Counter:", count);
    return count;
  };
}
const counter1 = createCounter();
counter1(); // Output: Closure Counter: 1
counter1(); // Output: Closure Counter: 2

const counter2 = createCounter();
counter2(); // Output: Closure Counter: 1 (separate closure)

// Closure with parameters
function createGreeter(greeting) {
  return function (name) {
    console.log("Closure Greeting:", `${greeting}, ${name}!`);
  };
}
const sayHi = createGreeter("Hi");
sayHi("Wada"); // Output: Closure Greeting: Hi, Wada!
sayHi("Lensa"); // Output: Closure Greeting: Hi, Lensa!

// =============================================================================
// 📦 Section 18: Modules (Import/Export)
// Explanation: Modules organize code into reusable files. In React, components
//              and utilities are often exported/imported as modules.
// Note: Node.js requires "type": "module" in package.json for import/export.
//       Here, we simulate modules in a single file for Node.js compatibility.
const utils = {
  add: (a, b) => a + b,
  user: { name: "Wada", city: "Jimma" },
};
console.log("Simulated Module Add:", utils.add(5, 3)); // Output: Simulated Module Add: 8
console.log("Simulated Module User:", utils.user); // Output: Simulated Module User: { name: "Wada", city: "Jimma" }

// Actual module syntax (uncomment in a module-enabled environment):
/*
export const add = (a, b) => a + b;
export const user = { name: "Wada", city: "Jimma" };
// In another file:
// import { add, user } from "./utils.js";
*/

// =============================================================================
// 🛡️ Section 19: Strict Mode
// Explanation: "use strict" enforces stricter JavaScript rules, catching errors
//              early. In React, it's enabled by default in modern setups.
function demonstrateStrictMode() {
  "use strict";
  // Undeclared variable causes error in strict mode
  // x = 10; // Error: x is not defined
  let x = 10;
  console.log("Strict Mode Variable:", x); // Output: Strict Mode Variable: 10
}
demonstrateStrictMode();

// =============================================================================
// 📝 Final Notes for React Preparation
// - Objects, destructuring, and spread: Manage props and state efficiently.
// - Array methods (map, filter, reduce, forEach, find): Render lists and compute data.
// - Scope (let/const): Avoid bugs in components.
// - Callbacks, promises, async/await: Handle API calls and async logic.
// - Event handling: Respond to user interactions in JSX.
// - Template literals: Create dynamic content in JSX.
// - Default/rest parameters: Write flexible component functions.
// - Closures: Manage private state or memoized functions.
// - Modules: Organize components and utilities.
// - Strict mode: Write robust, error-free code.
// Note: Async outputs (setTimeout, promises, async/await) may appear out of order
//       due to delays (e.g., 2s, 3s, 1s). Total runtime: ~6 seconds for async sections.
// You're now fully equipped to start React! 🚀
// =============================================================================
``
  