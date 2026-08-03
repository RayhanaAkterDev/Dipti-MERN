const SumayaInfo = {
    name: "Sumaya Akter",
    gender: "Female",
    city: "Dhaka",
    isMarried: false,
    children: 1,
    husband: undefined,
    age: 25,
    friendList: ["Tushar", "Alvi", "Rupai"],
    fullAddress: () => {
        return "Matuail, Dhaka-1362";
    },
    skills: {
        html: "80%",
        css: "75%",
        js: "40%",
    },
};

console.log(SumayaInfo.name); // Dot notation
console.log(SumayaInfo["gender"]); // Bracket notation
console.log(typeof SumayaInfo); // object

// ===========================================================

const sumaya = {
    name: "Sumaya Akter",
    gender: "Female",
    city: "Dhaka",
    isMarried: false,
    children: 1,
};

const stringifySumaya = JSON.stringify(sumaya);
console.log(stringifySumaya);
console.log(sumaya);

const js = JSON.parse(stringifySumaya);
console.log(typeof js);
