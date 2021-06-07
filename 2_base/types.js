// типы переменных в JS

// 1-line comment
/* 
    multi-line comment
*/

/*
    Типы данных в JS (ES5):
        - Number
        - String
        - Boolean
        - Object
        - Null
        - Undefined
*/

var sumeNumber = 55;    // Number

var mes1 = 'message'; // String

var isTrue = true; // false

var obj = {a: 1}

var nothing = null;

var undef = undefined;

console.log(typeof sumeNumber)  // проверка типа (так правильнее)
// console.log(typeof(sumeNumber));    // так-же валидно
console.log(typeof mes1)
console.log(typeof isTrue)
console.log(typeof obj)
console.log(typeof nothing)  // object - так как это отдельный тип данных
console.log(typeof undef)

// typeof function() {} // "function" - хотя функции это объекты