console.log("Hello, World!");

// variable
// Rules of variable naming convention

var myName = "Sumaya Akter";
console.log(myName);

// data types

/**
 * Primitive data types
 * Non-primitive data types
 */

/**
 * Primitive data types -
 * string
 * number
 * boolean
 * null
 * undefined
 * symbol
 * BitInt
 */

var _undefined = undefined;
var _null = null;
var _classSymbol = Symbol("class");
var _bigInt = 10n;

console.log(typeof "Dhaka");
console.log(typeof 31);
console.log(typeof true);
console.log(typeof _null);
console.log(typeof _undefined);
console.log(typeof _classSymbol);
console.log(typeof _bigInt);

// Max integer value before bigInt
console.log(Number.MAX_SAFE_INTEGER);

/**
 * Non-primitive data types
 * Array
 * Object
 * Function
 */

// array
var myChildren = ["chiku", "rafi", "raja", "vadu"];
console.log(typeof myChildren);

// object
var myInfo = {
    name: "sumaya akter",
    email: "sumaya@gmail.com",
};
console.log(typeof myInfo);

// function
function myFunc() {
    console.log("A text from a function");
}

console.log(typeof myFunc);

// ========================

/** operators
 * arithmatic: +, _, *, / ,%
 * asssignment: =, +=, -+, *=, /+, %=, **=
 * comparison: ==, ===, != !==, <, >, <=, >=
 * logical: &&, ||, !
 * Increment/decrement: ++, --
 */

var x = 5;
x += 3; // x = x + 3
x -= 2; // x = x - 2

console.log(x);

console.log(1 == true); // true
console.log(0 == false); // true
console.log(1 === true); // false

var x = 5;
x = x + 1;
x += 1;
x++;

console.log(x);

/**
 * ternary
 * null-safe operators
 */

var ans = 5 < 6 ? "condition true" : "condition false";
var cancer = null;
console.log(cancer ?? ans);

// condition
var age = 40;
if (age < 13) {
    console.log("your are a baby");
} else if (age < 20 && age >= 13) {
    console.log("your are a teenager");
}

const mathRound = Math.round(2.4);
const mathRandom = Math.random() * 40;
const mathAge = Math.ceil(Math.random() * 40);
const mathTwo = Math.floor(Math.random() * 2);

console.log(mathTwo);

var genders = ["Male", "Female"];
var g = genders(mathTwo);
console.log(g);
