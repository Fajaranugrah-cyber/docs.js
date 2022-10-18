// global variable, dapat diakses pada parent() dan child()
const a = 'a';

     // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.   
    function parent() {
        const b = 'b';
        

         // local variable, dapat diakses hanya pada fungsi child().
    function child() {
            const c = 'c';
        }

}

//Kita harus berhati-hati dalam mendefinisikan variabel di dalam fungsi. Pasalnya, kita bisa mendapatkan hasil yang tidak diperkirakan,  contohnya seprti brikut ini


function multiplay(num) {
    total = num + num;
    return total
 }

 let total = 9;
 let number = multiplay(20);

 console.log(total);