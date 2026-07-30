console.log("hello world");
console.log("hello universe");

// Loop: while

var start = 0;
var endPoint = 10;

// while (start < endPoint) {
//     console.log("Lool Running" + " " + start);
//     start++;
// }

while (endPoint >= start) {
    console.log("Lool Running" + " " + endPoint);
    endPoint--;
}

console.log("\n");

// Loop: for
for (let i = 1; i <= 10; i++) {
    console.log("1" + " x " + i + " = " + i);
}

console.log("\n");

for (let i = 2; i <= 20; i += 2) {
    // console.log("2" + " x " + i / 2 + " = " + i);
    console.log(`2 x ${i / 2} = ${i}`);
}

// Loop: do while
var s = 11;

do {
    console.log(s);
    s++;
} while (s < 10);

console.log(s);

console.log("\n");

// function
function myFunc(msg1 = "assalamu alaikum", msg2 = "bhaijan") {
    console.log("The message is: " + msg1 + " " + msg2);
}

myFunc("hello", "world");
myFunc("hi", "universe");
myFunc();
myFunc("adab");

console.log("\n");

function add(num1 = 10, num2) {
    let sum = num1 + num2;
    return sum;
}

let Add = add(4, 5);
console.log(Add);

let rp = function () {
    return "Return value";
    console.log("ha ha ha");
};

console.log(rp());

// Pure function
// Anonymous function

// Callback function
let mainFunc = function (p1, p2) {
    return p1 + " " + p2();
};

console.log(
    mainFunc("Ami", function () {
        return "vat khai";
    }),
);

// NOTE: যে function অন্য একটি function-কে parameter হিসেবে গ্রহণ করে, তাকে Higher-Order Function (HOF) বলে।
// আর যে function-কে parameter হিসেবে পাঠানো হয়, তাকে Callback Function বলে।

// Recursive function
let reCur = function (n) {
    if (n == 0) {
        console.log(n);
        return;
    }
    console.log(n);
    reCur(--n);
};

reCur(5);

// Find the factorial value using recursive function


