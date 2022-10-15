function multiplay(a, b){
    return a * b;
}

multiplay(10, 12);

function myName(){
    console.log("halo word!")
}
myName()

function iamFrom(name, location){
    if(location === "new york"){
       return `hai my name is ${name} i am from in ${location}`
    }else if(location === "us"){
        return `hai my name is ${name} i am from in ${location}`
    }
}

let named = iamFrom("jhon", "us")

console.log(named)

// parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan destructuring 
const names = { saya : 'fajar', dia : 'budi'}

function diskName({saya, dia}){
    console.log(`${saya} is ${dia}`)
}

diskName(names)


// fungsion defualt 
function exsponenFormula(number, exponen = 2){
    let result = number ** exponen;
    console.log(`${number} ^ ${exponen} = ${result}`)
}

exsponenFormula(2);


// rest parameter fungsion
function sum(...numbers){
    let sin = 0;
    for(let data of numbers){
    sin += data;
    }
    return sin
}

console.log(sum(1, 4, 5, 6, 4))