// прототипы

// оператор new
var car = {
    // ....
};

// создание общего прототипа
// в ES5 нет доступа к class, extends и т.д., только через функции
// функции-классы называются с большой буквы
function Car(name, year) {
    this.name = name;    // this - ссылка на создаваемый объект
    this.year = year;

    //return this // это делает new
};

// добавление метода в прототип (аналог методов у классов)
Car.prototype.getAge = function() {
    return new Date().getFullYear() - this.year;
}

// свойства для каждого создаваемого объекта - будет хранится в __proto__ 
// к полям и методам в __proto__ можно обращатся напрямую из экземпляра
Car.prototype.color = "Black";



// вызов как-бы конструктора
var ford = new Car("Ford", 2015);
ford.color = "Red";

var bmw = new Car("BMW",2017);

/*
    ford.color = "Red" - добавляет своёство к экземпляру ford
    поэтому при вызове ford.color - будет выдано "red" так как оно существует и задано

    в bmw экземпляре не будет свойства color, но будет в прототипе поэтому 
    при вызове bmw.color - интерпретатор спустится в __proto__ и вернёт "Black" оттуда
*/


// console.log(typeof ford); // object
console.log(ford);
console.log(bmw);

