// Async Await
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

// jokhono wait er kaj ashbe, we'll work with async diye kaj korbo
const showPr = async () => {
    try {
        const data = await pr;
        console.log(data);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("kaj ses hok ba na hok, last a ai line print hobe");
    }
};

showPr();
