// операторы сравнения

// всегда возвращают true или false 
console.log('5 > 3', 5 > 3)
console.log('3 < 2', 3 < 2)

console.log('8 >= 7', 8 >= 7)
console.log('12 <= 12', 12 <= 12)
console.log('12 < 12', 12 < 12)

console.log('4 == 4', 4 == 4)
console.log('4 == 5', 4 == 5)

console.log('4 != 4', 4 != 4)
console.log('4 != 5', 4 != 5)

console.log('4 === 4', 4 === 4)
console.log('4 === \'4\'', 4 === '4')   // проверка на значение И тип данных Number != String => false
console.log('4 == \'4\'', 4 == '4')     // приведение 4 к string, содержимое эквиваленто => true

// При проверке на равенство в JS рекомендуется использовать "===" 