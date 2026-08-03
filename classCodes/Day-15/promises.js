// javascript promise
console.log('checking if sumaya keep her promise or not');

const sumayaPromise = false;
const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (sumayaPromise) {
            resolve("Sumaya has keep her promise");
        } else {
            reject("Sumaya doesn't keep her promise");
        }
    }, 5000);
});


pr.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});


console.log('result will be published soon');
console.log('result has been published. see the result');

console.log('\n');

// console.log("Start");

// setTimeout(() => {
//     console.log("2 seconds passed");
// }, 2000);

// console.log("End");

// ==============================

// Rest & Spread operators
