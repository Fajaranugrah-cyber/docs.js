// leguler function 
// ==========================

// funcion declaration 
function sayHello(greet){
    console.log(`${greet}!`)
}

sayHello("haloo")

// function exspresion 
const sayName = function (name){
    console.log(`hai my name is ${name}`)
}

sayName('fajar')
// ==========================


// arrow function 
// ==========================

const syName = (greet) => {
    console.log(`${greet}`)
}
syName('saya')

const syHello = (nama) => {
    console.log(`hai my name is ${nama}`)
}
syHello('budi setiawan')

//cara untuk memperpendk baris yang di butuh kan jika memiliki fungsi satu saja

const dataVariabel = dataNum => console.log(`num mydata ${dataNum}`);
dataVariabel('buget')

const address = locat => console.log(`i am from ${locat}`)
address('indonesian')

//untuk mengembalikan nilai kita tidak lagi menggunakan return kita bisa langsung mengembalikanya dengan mudah
const multiplay = (a, b) => a * b;
console.log(multiplay(20, 10))

