var myInfo = {
    myName: "Sumaya Akter",
    myGender: "female",
    myAge: 25,
    isMarried: false,
    myProjects: ["MyFolio", "Stand for poeple"],
    myJob: function () {
        return "I'm a frontend web developer";
    },
    myEmail: function (email) {
        return "My current email is : " + email;
    },
    myAddress: {
        houseNo: "11/110",
        road: "Zero Point",
        area: "Matuail",
        city: "Dhaka",
        postCode: "1362",
        fullAddress: function () {
            return (
                this.houseNo +
                ", " +
                this.road +
                ", " +
                this.area +
                ", " +
                this.city +
                "-" +
                this.postCode
            );
        },
    },
};

console.log(myInfo.myName);
console.log(myInfo.myGender);
console.log(myInfo.myAge);
console.log(myInfo.myJob());
console.log(myInfo.myEmail("sumaya55230@gmail.com"));
console.log(myInfo.myAddress.fullAddress());

// =====================================

let ourInfo = {
    rifat: "Gopalganj",
    ashraf: "Pakistan",
    rafayet: "Faridpur",
    humayun: "Barishal",
};

console.log("\n");

for (let info in ourInfo) {
    console.log(info + " : " + ourInfo[info]);
}
