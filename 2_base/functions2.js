// способы создания функций

// стандартный способ
// function sayHelloTo (name) {
//     console.log('Привет, ' + name)
// }

// sayHelloTo('Елена')

// через переменную
var sayHelloTo = function (name) {
    console.log('Привет, ' + name)
}

sayHelloTo('Игорь')
// но тогда нельзя вызвать до объявления

// если объявляется function - она доступна всему файлу, и можно вызывать её до объявления
// если объявляется через переменную var - интерпретатор - смотрит что есть такая переменная но значение передаст только по ходу
