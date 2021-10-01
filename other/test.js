// function log1 (timespan, linenumber, msg) {
//     console.log(linenumber + " " + timespan + " " + msg);
// }

// var start = Date.now();
// var linenumber = 1;

// log1(Date.now() - start, linenumber++, "один");
// log1(Date.now() - start, linenumber++, "два");

// console.log("");

// // вариант через замыкания
// var log2 = (function() {         // функция 1 
//     var start2 = Date.now();     // текущее значение сохраняется в start
//     var num = 1;                // так-же используется в замыкании в функции 2
//     return function(msg) {      // функция 2 сохраняется в var log
//         console.log(num++ + " " + (Date.now()-start2) + " " + msg);
//     }
// })();   // () - вызываем функцию 1

// log2("один");
// log2("два");

// замыкание - createCounter возвращает объект, у которого есть методы, которые манипулируют
// переменной counter недоступной для внешнего мира, так ещё и при каждом инстанциировании - своей
var createCounter = function (counterName) {
    var counter = 0;

    return {
        increment: function() {
            counter++;
        },
        decrement: function() {
            counter--;
        },
        getCounter: function() {
            return counter;
        }
    }
}

var counterA = createCounter("C_A");
counterA.increment();
counterA.increment();
console.log(counterA.getCounter());

var counterB = createCounter("C_B");
counterB.decrement();
console.log(counterB.getCounter());

