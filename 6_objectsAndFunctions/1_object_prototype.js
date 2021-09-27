// number, string, boolean, null, undefined - примитивы
// object   - объекты

// new Date() - возвращает объект типа Date
// у него есть методы

// {} быстрое создание объекта
var car = {
    name: "Ford",
    year: 2015,
    person: {

    }
};

console.log(typeof car); // object
console.log(car);

console.log(car.__proto__);
/*
    {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()
*/

// car.__proto__ => Object.prototype 


// методы типа toString() и hasOwnProperty - это методы object
// все методы и свойства от object есть в __proto__ - ссылка на прототип родителя

// у любого объекта в JS есть ссылка на дефолтный объект по умолчанию - прототип

// Object - функция но на самом деле объект
//  car.__proto__ === Object.prototype
//               true

var arr = [1,2];
console.log(arr.toString());
// [] => Array => Object





