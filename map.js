const data = new Map([
    ['number', '1'],
    [1, 'datanumber'],
    [true, false]
])

console.log(data);
console.log(data.size);
console.log(data.get('number'));
data.set('nama', 'fajar')
console.log(data.size);
console.log(data);