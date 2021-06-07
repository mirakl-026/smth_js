// массивы

var cars = [
    'Ford',
    'Mazda',
    'Kia',
    'BMW'
]

var magicBox = [ 55, 'Windows', NaN, {}]

console.log(cars)
//console.log(magicBox)

//console.log(cars[1])
console.log(cars.length)

cars.push('Lada')
console.log(cars)

var lada = cars.pop()   // удаляет и возвращает последний элемент
console.log(cars)
console.log(lada)

var ford = cars.shift() // удаляет и возвращает первый элемент 
console.log(cars)

cars.unshift(lada) // добавляет в начало
console.log(cars)

console.log(cars.indexOf('Kia'))    // 2
console.log(cars.indexOf('kia'))    // -1 

var index = cars.indexOf('lada')
var data = cars[index]
console.log(data)