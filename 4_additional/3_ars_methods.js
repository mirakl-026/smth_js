// доп. методы работы с массивами

var str = '1,2,3,4,5,6,7,8'

// split
var arrrayOfNums = str.split(',')
console.log(arrrayOfNums)

// соединение
var strJoined = arrrayOfNums.join(';')
console.log(strJoined)

// изменение порядка массива
// var arrayRev = arrrayOfNums.reverse()
// console.log(arrayRev)

// splice
arrrayOfNums.splice(1, 3)   // начиная со второго елемента - удалить 3
console.log(arrrayOfNums)

arrrayOfNums.splice(0, 1, '11') // удалить первый елемент, вставить 11 на его место
console.log(arrrayOfNums)

arrrayOfNums.splice(2, 0, '33') // не удаляя третий елемент, вставить 33 на его место
console.log(arrrayOfNums)

arrrayOfNums.splice(3, 0, '31', '32') // не удаляя четвёртый елемент, вставить 31, 32 на его место
console.log(arrrayOfNums)

// concat - создаёт копию массива
var newArray = arrrayOfNums.concat([1,2])
console.log(newArray)
console.log(arrrayOfNums)

// find - поиск элемента в массиве
var objArr = [
    {name: 'Max', age: 27},
    {name: 'Elena', age: 29},
    {name: 'Victor', age: 20}
]
console.log(objArr)

// функция принимает каждый элемент массива
var foundedPerson = objArr.find(function(person){
    console.log(person)
    return person.age === 20
})
console.log(foundedPerson)

// filter
var oddArray = [1,2,3,4,5,6,7,8,9].filter(function(i) {
    return i % 2 !== 0
})
console.log(oddArray)

// map
// arrayOfNumbers
console.log(arrrayOfNums)
var numArray = arrrayOfNums.map(function(i) {
    return parseInt(i)
})
console.log(numArray)
