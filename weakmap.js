// let  visitCount = new Map(); //mnyimpan daftar user

// function countUser(user) {
//     let count = visitCount.get(user) || 0;
//     visitCount.set(user, count  +  1);
// }

// let jonas = {name : 'fajar'};
// countUser(jonas) //menmabha user jonnes

// jonas = null //data variabel jonas dihapus\\
// setTimeout (function(){
//     console.log(visitCount)
// }, 0.1)


//weakmap

const { inspect } = require('util');

let visitsCountMap = new WeakMap(); // Menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);                // Menambahkan user "Jonas"

jonas = null;                    // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
  console.log(inspect(visitsCountMap, { showHidden: true }));
}, 10000);



