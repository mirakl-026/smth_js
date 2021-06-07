// числа

console.log(770)

console.log(-500)

console.log(1.5)

console.log( -8 / 3)    // -2.6666666...5

console.log(0xAB)   // hex 0xAB, dev 171
console.log(0b111)  // 7
console.log(2e3)    // 2000 = 2 * 10^3

// специальные значения
console.log(NaN)    // not a number
console.log(typeof(NaN))

console.log(17 / 'kek')

console.log(1 / 0)  // Infinity


var fortyTwo = 42

console.log(fortyTwo.toString())

var delta = 8 / 3
console.log(delta.toFixed(3))   // 2.667 as string
console.log(+delta.toFixed(3))   // 2.667 as number
console.log(delta.toFixed(3) + 4)   // 2.6674 
console.log(+delta.toFixed(3) + 4)   // 6.667 

console.log(parseFloat('1.98')) // 1.98 as number
console.log(parseInt('1.98')) // 1 as number

console.log(isNaN(NaN))
console.log(isNaN(1245))

console.log(isFinite(1 / 0))    // false
console.log(isFinite(200000000000)) // true