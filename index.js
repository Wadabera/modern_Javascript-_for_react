// =====================================================
// 📁 JavaScript Concepts: Anonymous Functions & More
// Author: Wada Abera
// Description: This file includes well-organized examples
//              of anonymous functions and related JS concepts
// =====================================================

// =====================================================
// 🔐 Bitwise Permissions Example
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let userPermission = 0;
userPermission = userPermission | readPermission | writePermission;
console.log("User Permission:", userPermission); // Output: 6

let message = (userPermission & readPermission)
    ? "You have read permission"
    : "You don't have read permission";
console.log(message);

// =====================================================
// 🚗 Object Literals Example (Car Objects)
const car1 = { name: "Toyota", model: "Corolla", year: 2005 };
const car2 = { name: "Vitz", model: "Mask", year: 2006 };
const car3 = { name: "Honda", model: "Civic", year: 2007 };

// =====================================================
// 🧠 var vs let in JavaScript
function start() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log("Outside loop with var:", i); // i still accessible here
}
start();

// =====================================================
// 🧑‍🏫 Regular Function vs Arrow Function
function sayHello() {
    console.log("Akkam naga jirtuu hundumtuu keessan");
}
sayHello();

const greetJimma = () => {
    console.log("Warri Jimma warri Indoo akkam naga keessan jirtuu?");
};
greetJimma();

const akk = () => {
    console.log("Jirra jirtuu hundumti keessan");
};
akk();

// =====================================================
// 👤 Object Usage in JavaScript
const person = {
    name: "Wada",
    age: 20,
    nationality: "Ethiopian",
    city: "Jimma",
    job: "Software Engineer"
};
console.log("My age is:", person.age);
console.log("My name is:", person.name);
console.log("The place where I live:", person["city"]);
console.log("My profession is:", person["job"]);

// =====================================================
// 🧩 Object Destructuring
const car = {
    model: "Corolla",
    year: "2005",
    price: 222200000,
    color: "Red"
};

// Long way
const carModel = car.model;
const carYear = car.year;
const carPrice = car.price;
const carColor = car.color;
console.log("Car Details (Manual):", carModel, carYear, carPrice, carColor);

// Short way (Destructuring)
const { model, year, price, color } = car;
console.log("Car Details (Destructured):", model, year, price, color);

// =====================================================
// 🔁 map() Method in JavaScript
const products = ["product1", "product2", "product3", "product4"];
const displayItems = products.map(product => `<li>${product}</li>`);
console.log("HTML List Items:", displayItems);

const numbers = [1, 2, 3, 4, 5, 6];
const doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

const increasedByTen = numbers.map(num => num + 10);
console.log("Increased by 10:", increasedByTen);

// =====================================================
// 🔍 filter() Method in JavaScript
const numbers3 = [2, 5, 8, 9, 10, 12, 15, 20, 25, 30];
const evenNumbers = numbers3.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// =====================================================
// 🌐 Spread Operator for Arrays & Objects
const array1 = [1, 2, 3, 4, 5];
const array2 = [8, 9, 10];
const combinedArray = [...array1, 6, 7, ...array2];
console.log("Combined Array:", combinedArray);

const person1 = { name: "Wada", age: 20 };
const person2 = { lname: "Abera", city: "Addis Ababa" };
const combinedPerson = { ...person1, ...person2, country: "Ethiopia" };
console.log("Combined Person:", combinedPerson);

// =====================================================
// ✅ if/else and Ternary Operator
const age = 20;
let message1 = "";
if (age >= 18) {
    message1 = "You are eligible to vote.";
} else {
    message1 = "You are not eligible to vote.";
}
console.log(message1);

const age2 = 20;
const message2 = age2 >= 18
    ? "You are eligible to vote"
    : "You are not eligible to vote";
console.log(message2);

// =====================================================
// 📚 Anonymous Functions - Detailed Examples

// 1️⃣ Anonymous Function Stored in a Variable
const greetUser = function () {
    console.log("Hello from anonymous function stored in a variable!");
};
greetUser();

// 2️⃣ Anonymous Function in setTimeout()
setTimeout(function () {
    console.log("This is an anonymous function used in setTimeout (after 2 seconds)");
}, 2000);

// 3️⃣ Anonymous Function in map()
const numberArray = [1, 3, 4, 56];
const doubleArray = numberArray.map(function (number) {
    return number * 2;
});
console.log("Mapped Doubled Array:", doubleArray);

// 4️⃣ Anonymous Function in filter()
const evenNumbersArray = numberArray.filter(function (number) {
    return number % 2 === 0;
});
console.log("Filtered Even Numbers:", evenNumbersArray);

// 5️⃣ Anonymous Function in forEach()
numberArray.forEach(function (number) {
    console.log("ForEach Number:", number);
});

// 6️⃣ Arrow Function (Modern Anonymous Syntax)
const greeting = () => {
    console.log("Hello from arrow function — akkam naga jirtuu hundumtuu keessan!");
};
greeting();

// =====================================================
// 📞 Callback Functions - Simple Explanation
// A callback function is a function passed as an argument to another function
// It is called after the first task is done

function processUserInput(callback) {
    const name = "Wada";
    callback(name);
}

processUserInput(function (userName) {
    console.log("Welcome,", userName);
});
function hello(){
    setTimeout(function(){
        console.log("hello calla back function how are you?");
    }, 3000);
}
function goodby(){
    console.log("goodby call back function howare you?");
}
hello();
goodby();
function helloOromia(){
    console.log("this is the  secondcall back function");

}

 function goodbyOromia(callback){
    console.log("this is the first call back function")
    callback();
 }
 goodbyOromia(helloOromia);
 function add(a, b,callback){
    const sum=a+b;
    callback(sum);
 }
 function displayresult(sum){
    console.log(sum)
 }
 add(5,10,displayresult);
// =====================================================
// ⏱️ Async/Await and setTimeout Example
// Async/await allows writing async code like it's synchronous
setTimeout(() => {
    console.log("I waited for 2 seconds before printing this message");
}, 2000);
//multi call baack function
function task1(callback) {
    setTimeout(() => {
        console.log("Task one is already completed in this case");
        callback(); // Call next task
    }, 2000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task two has already completed in this case");
        callback(); // Call next 
    }, 3000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task three has already completed in this case");
        callback(); // Final message
    }, 1000);
}

// Start the tasks one by one (callback chaining)
task1(() => {
    task2(() => {
        task3(() => {
            console.log("✅ All tasks are properly completed. Congratulations!");
        });
    });
});

// =====================================================
// 📌 find() vs filter()
const people = [
  { name: "Wada", age: 20 },
  { name: "Lensa", age: 22 },
  { name: "Tsega", age: 20 }
];

// find(): Returns first match
const personFound = people.find(p => p.age === 20);
console.log("Person Found with age 20:", personFound);

// filter(): Returns all matches
const peopleAge20 = people.filter(p => p.age === 20);
console.log("All People with age 20:", peopleAge20);
// ✅ burden1: returns a promise that resolves after 2 seconds
function burden1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Burden one has completed");
            resolve();
        }, 2000);
    });
}

// ✅ burden2: returns a promise that resolves after 3 seconds
function burden2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Burden two has completed");
            resolve();
        }, 3000);
    });
}

// ✅ burden3: returns a promise that resolves after 1 second
function burden3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Burden three has completed");
            resolve();
        }, 1000); // Add duration here
    });
}

// ✅ Chaining the promises in the correct order
burden1()
    .then(() => burden2())
    .then(() => burden3())
    .then(() => {
        console.log("✅ All burdens have completed in detail.");
    });
    //asyk  amd wait  in form of more and clera more undrtandabl manner in this case
    function burden1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Burden one has completed");
      resolve();
    }, 2000);
  });
}

function burden2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Burden two has completed");
      resolve();
    }, 3000);
  });
}

function burden3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Burden three has completed");
      resolve();
    }, 1000);
  });
}

// ✅ Now use async/await
async function runAllBurdens() {
  await burden1();  // Wait for burden1 to finish
  await burden2();  // Wait for burden2 to finish
  await burden3();  // Wait for burden3 to finish
  console.log("✅ All burdens have completed in detail (using async/await)");
}

runAllBurdens();
let num = [1, 3, 4, 5, 7, 8];

const total = num.reduce((accumulator, current)=> {
    return accumulator + current;
}, 0);

console.log(total); // Output: 28
//*********************************** */


