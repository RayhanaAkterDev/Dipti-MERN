// var, let, const
var x = 10;
x = 11;

let y = 15;
y = 16;

const z = 10;

console.log(x);
console.log(y);
console.log(z);

// Closure function
function mainFunc(fPara) {
  return function (sPara) {
    return fPara + " " + sPara;
  };
}

const kuddus = mainFunc("ha ha ha");
console.log(kuddus("ho ho ho"));

// =======================
// Function declarations
// =======================

function myInfo(name) {
  return "My name is " + name;
}

const myInfo1 = (name) => {
  return "My name is " + name;
};

const myInfo2 = function (name) {
  return "My name is " + name;
};

const myInfo3 = (name) => {
  return "My name is " + name;
};

const myInfo4 = (name) => {
  return "My name is " + name;
};

const myInfo5 = (name) => "My name is " + name;

// Test them
console.log(myInfo("Sumaya"));
console.log(myInfo1("Sumaya"));
console.log(myInfo2("Sumaya"));
console.log(myInfo3("Sumaya"));
console.log(myInfo4("Sumaya"));
console.log(myInfo5("Sumaya"));

// =======================
// Template Literal
// =======================

const a = "ami";
const b = "valo achi";

const c = () => {
  return "ami vaat khai";
};

console.log(a + " " + b + "." + " and " + c());
console.log(`${a} ${b}. and ${c()}`);

// =======================
// Array Destructuring
// =======================

const myStudents = ["Refat", "Shobuj", "Borno", "Mohan"];

const [std1, std2, ...std3] = myStudents;

console.log(std1);
console.log(std2);
console.log(std3);

// =======================
// Object Destructuring
// =======================

// Changed variable name from myInfo -> personInfo
const personInfo = {
  myName: "Asif",
  myGender: "Male",
  isMarried: true,
  totalChildren: 3,
};

const { myName, myGender } = personInfo;

console.log(myName);
console.log(myGender);