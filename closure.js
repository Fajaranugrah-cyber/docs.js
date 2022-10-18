// function variabel(){
//     let data = 'this is a variabel';

//     function get(){
//         console.log(`${data}`);
//     }
//     return get;
// }

// let number = variabel();
// number()


// //================================================================
// clouser = 0

// let data = () => {
//     return ++clouser;
// };

// console.log(data());
// console.log(data());
// clouser = 24;
// console.log(data());

//sebaiknua dihindari

let int = () => {
    str = 0;
    
    return () =>  {
        return ++str;
    }
}

let datascanel = int();
console.log(datascanel());
