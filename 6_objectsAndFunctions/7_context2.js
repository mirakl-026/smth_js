// Продолжение про контекст

// функция печатающая объект, его ключи и т.д по его имени
function printObject(objName) {
    console.log('Printing object: ', objName)
    for (var key in this) {
        if (this.hasOwnProperty(key)){
            console.log('[' + key + ']', this[key])
        }
    }
}

// вызов printObject без привязки будет - в области window
// this = window 

var person = {
    firstName: 'Max',
    job: 'Backend',
    age:29,
    friends: ['Elena','Igor']
}

var car = {
    name: 'Ford',
    model: 'Focus',
    year: 2017
}

// привязываем контекст
// метод bind возвращает новую функцию с привязанным контекстом
var printPerson = printObject.bind(person)
printPerson('Person')

// то же самое что и bind но и вызывает сразу
// 1 аргумент - объект, далее параметры функции
printObject.call(car, 'Car')

// так-же как и call,
// но аргументы в функцию идут массивом а не рядом параметров
printObject.apply(person, ['Person2'])