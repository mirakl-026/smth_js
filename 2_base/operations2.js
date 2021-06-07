// ещё операторы

// остаток от деления
console.log('5 % 2:', 5 % 2)
console.log('8 % 3:', 8 % 3)
console.log('25 % 5:', 25 % 5) 
// при % 2 - 1 - нечётное, 0 - чётное

var i = 1
console.log('i:', i)

i = i + 1
console.log('i = i + 1:', i)
i = i - 1
console.log('i = i - 1:', i)
i++
console.log('i++ :', i)
i--
console.log('i++ :', i)

console.log('i++ (in arg):', i++)
console.log('i-- (in arg):', i--)
console.log('i:', i)
console.log('++i (in arg):', ++i)
console.log('--i (in arg):', --i)

i += 16
console.log('i+= 3:', i)  // same to -, *, /

i %= 5
console.log('i %= 5:', i)