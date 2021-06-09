// замыкания - возможность создавать локальный скоуп данных
// а затем возможность вызывать их

// var createCounter = function(counterName) {
//     // создаётся локальная переменная которая видна только тут
//     var counter = 0

//     return function() {
//         console.log(counterName, ++counter)
//     }
// }

// // для каждой функции переменная counter будет собственная
// var counterA = createCounter('Counter A')
// var counterB = createCounter('Counter B')

var createCounter = function (counterName) {
    var counter = 0

    return {
        increment: function () {
            counter++
        },
        decrement: function() {
            counter--
        },
        getCounter: function () {
            return counter
        }
    }
}


var counterA = createCounter('Counter A')
var counterB = createCounter('Counter B')

counterA.increment()
counterA.increment()
counterA.increment()    // A = 3

counterB.decrement()
counterB.decrement()    // B = -2

console.log(typeof counterA)
