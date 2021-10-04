// setTimeout - When I say so - выполнится через 1.5 секунды
var sum = 0;
function myFunc(arg) {
    // console.log(`arg was => ${arg}`);
    sum += 555;
}
setTimeout(myFunc, 10, 'courtesy call');

for (let i = 0; i < 1000000; i++) {
    sum = i;
    if ((i % 10000) == 0)
        console.log(sum);
}

console.log(sum);


// setImmediate - Right after this  - 
// console.log