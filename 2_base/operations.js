// базовые операции

var num1 = 12
var num2 = 8

console.log('+:', num1 + num2)
console.log('-:', num1 - num2)
console.log('*:', num1 * num2)
console.log('/:', num1 / num2)

var str1 = 'Hello'
var str2 = 'World'

console.log('+:', str1 + ' '  + str2)

console.log('1 + 2:', 1 + '2')  // 12 т.к. 1 приводится к String и + это конкатенация
console.log('str1 + num1:', str1 + num1) // Hello12
console.log('Boolean + string:', true + str2)   // trueWorld

console.log('True + 1:', true + 1)      // True -> Number = 1
console.log('False + 1:', false + 1)    // False -> Number = 0