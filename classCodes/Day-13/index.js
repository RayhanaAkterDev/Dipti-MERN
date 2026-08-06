// Array
var myStudents = ["sumaya", "raja", "rafi", "vadu"];
// console.log(myStudents);
// console.log(myStudents[0]);

// for (let i = 0; i < myStudents.length; i++) {
//     console.log(myStudents[i]);
// }

// foreach array method
myStudents.forEach(function (std, index) {
    console.log(std + " : " + index);
});

console.log("\n");

// map array method => can return value/result
let res = myStudents.map(function (std, index) {
    console.log(std + " : " + index);
    return std;
});

console.log(res);

console.log("\n");

// for of array method
for (let std of myStudents) {
    console.log(std);
}

console.log("\n");

// add a new element in the end of the array using push()
// myStudents.push("ayaz");
myStudents.push("ayaz", "riyaz");
console.log(myStudents);

// remove the last element from the array using pop()
myStudents.pop();
console.log(myStudents);

// Add and remove at the beggining of the array
// myStudents.unshift("tushar");
myStudents.unshift("alvi", "tushar");
console.log(myStudents);

myStudents.shift();
console.log(myStudents);

// Find the index value of a array element
console.log("\n");
console.log(myStudents.indexOf("sumaya"));

// Find array length
console.log(myStudents.length);
console.log("\n");

// ===============================================

console.log("Main student array : " + myStudents);
console.log("\n");

var selectedStd = myStudents.slice(2, 4);
console.log("Seleted Students Slice : " + selectedStd);
console.log("Main array remain same : " + myStudents);
console.log("\n");

// ===============================================

var deletedStd = myStudents.splice(1, 4);
console.log("Deleted Students Splice : " + deletedStd);
console.log("Now main array : " + myStudents);

console.log("\n");

deletedStd.sort();
console.log("Sort deleted students : " + deletedStd); // default sort asscending order

deletedStd.reverse();
console.log("sorted students reverse order : " + deletedStd);

console.log("\n");

console.log(myStudents.includes("Rafa")); // checks if value is present in array or not and represent result using true/false

console.log(Array.isArray(myStudents)); // checks data type is array or not
console.log("\n");

// ===============================================

// Sorting only for numbers

let stdAges = [4, 15, 25, 8, 29, 32];
// console.log(stdAges.sort()); // ❌ wrong
stdAges.sort(function (a, b) {
    // return a - b; // accending sort of numbers
    return b - a; // Decending sort of numbers
});

console.log(stdAges);

// ===============================================

// sting to array
let str = "i eat rice";
let newStr = str.split(" ");
console.log(newStr);

// Filter
let myProjects = ["MyFolio", "Stand for poeple", "Gymnesiam"];
let result = myProjects.filter(function (val) {
    return val.length > 8;
});

console.log(result);
console.log("\n");

// ===============================================

// function - 1 argument - number - validation - leapYear

function checkLeapYear(year) {
    if (typeof year === "number") {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            return "this is leap year";
        } else {
            return "not leap year";
        }
    } else {
        return "not proper number";
    }
}

console.log(checkLeapYear(2020));
console.log(checkLeapYear(1900));
console.log(checkLeapYear(2000));
console.log(checkLeapYear(2003));
