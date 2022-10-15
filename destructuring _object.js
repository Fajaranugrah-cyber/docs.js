const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}

/* 
const {firstName, lastName, age} = profile;
console.log(firstName, lastName, age)
*/ 

// destructuring assignment 

// let firstName = ' bagas';
// let age = 20;

// menginisialisasi nilai baru melalui destructuring object
// ({firstName, age} = profile)
const  {firstName, age, family = false} = profile;
console.log(firstName);
console.log(age);
console.log(family)
console.log(profile);