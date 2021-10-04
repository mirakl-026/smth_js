// получение результата операции в Promise

// для получения значения операции промиса применяется функция then()
// объекта Promise

const myPromise = new Promise(function(resolve){
    console.log("...async 1");
    resolve("1 executed!");
});
myPromise.then(function (value) {
    console.log(`Из промиса получены данные: ${value}`);
});

// функция then() так-же возвращает Promise объект
// не обязательно вообще передавать данные в resolve() - 
// - асинхронная операция просто выполняется и передаёт во вне никакого результа

// const x = 4;
// const y = 8;
// const myPromise2 = new Promise(function () {
//     console.log("... async 2");
//     const z = x + y;
//     console.log(`2 result: ${z}`);
// });
// myPromise2.then();

// Метод Promise.resolve - ?
// иногда (когда?) требуется просто вернуть из промиса некоторое значение.
// для этого можно использовать метод Promise.resolve(). В этот 
// метод передаётся возвращаемое из промиса значение. Метод
// Promise.resolve() возвращает объект Promise:
const myPromise3 = Promise.resolve("Smth executed!");   // создаёт _выполненный_ промис
myPromise3.then( value => console.log(value));

// определение промиса через функцию
// нередко промис определяется через функцию, которая возвращает
// объект Promise:
function sum(x, y) {
    return new Promise(function (resolve) {
        const result = x + y;
        resolve(result);
    });
}

sum(3,5).then(function (value) {
    console.log("результат:", value);
});

sum(25,4).then(function (value) {
    console.log("сумма:",value);
});
// Определение промиса через функцию позволяет нам, с одной стороны
// при вызове функции передавать разные значения, а с другой стороны,
// работать с результатом этой функции как с промисом и настроить при каждом
// конкретном вызове обработку полученного значения

// если логика обработки результа совпадает, тогда можно внести её в функцию

function sum2(x, y) {
    return new Promise(function (resolve) {
        const result = x + y;
        resolve(result);
    }).then(function (value) {
        console.log("результат:", value);
    });
}

sum2(4, 3);
sum2(22, 1);

// если хочется заложить возможность изменить обработчик, то можно сделать так:
function sum3(x, y, func) {
    // если обработчик не определён, то устанавливаем по умолчанию
    if (func === undefined)
        func = function(value){console.log("результат:", value)};

    return new Promise(function (resolve) {
        const result = x + y;
        resolve(result);
    }).then(func);
}

sum3(5, 5);
sum3(22, 33, function (value) {console.log("Сумма:", value);});


