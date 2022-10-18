function minimal (a, b) {
    if(a < b)
    return a;
    else if(a > b){
        return b;
    }
    else if(a == b){
        return b;
    }
}

console.log(minimal(2, 2))


function power(a, b){
      let data =  a ** b;
      return data;
}

console.log(power(4, 0.5));


let data = (a, b) => { let pangkat = a **b; return pangkat; };
console.log(data(2, 2));
