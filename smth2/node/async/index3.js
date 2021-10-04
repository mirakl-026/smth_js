// обработка ошибок в Promise
// Для получения и обработки ошибки мы можем использовать функцию catch()
// объекта Promise, которая в качестве параметра принимает функцию обработчика 
// ошибки

const x = 4;
const y = 0;

const myPromise = new Promise(function(resolve,reject){
    if (y === 0) {
        reject("переданы некорректные данные");
    }
    else {
        const z = x / y;
        resolve(z);
    }
});
myPromise.catch(function(error){
    console.log(error);
});

// Функция catch() в качестве параметра принимает обработчик ошибки.
// параметром этой функции-обработчика является то значение, которое
// передаётся в reject()

// Генерация ошибки
// Ошибка может возникнуть и без вызова функции reject()
// Если в выполняемой в промисе операции генерируется ошибка в силу тех или 
// иных причин, то вся операция также завершается ошибкой, например - 
// вызов несуществующей функции:
const myPromise2 = new Promise(function(resolve){
    console.log("...async 2");
    getSomeWork();
    resolve("2 executed.")
});
// myPromise2.then(function(value){
//     console.log(":",value);
// });
myPromise2.catch(function(error){
    console.log("2 fail? Hao?");
});

console.log("123");

// throw
// так-же ошибка может быть результатом вызова оператора throw,
// который генерирует ошибку:

const myPromise3 = new Promise(function(resolve, reject){
    console.log("... async 3");
    const parsed = parseInt("Hello");
    if (isNaN(parsed)){
        throw "Not a number!";
    }
    resolve(parsed);        
});
myPromise3.catch(function(error){
    console.log(error);
});
// здесь если результат парсинга != число, то с помощью оператора throw
// генерируем ошибку. Это приведёт к завершению всей функции с ошибкой.
// В итоге результат будет обработан функцией catch.
// сообщение об ошибке берётся от оператора throw

// данная функция может показаться искусственной, так как нам нет смысла
// генерировать ошибку в throw, так как могли-бы передать в reject:
// if (isNaN(parsed)) - reject("no a number")
// однако данный оператор может применяться во внешней функции:

function getNumber(str) {
    const parsed = parseInt(str);
    if (isNaN(parsed)) {
        throw "Not a number";
    }
    else {
        return parsed;
    }    
}

const myPromise4 = new Promise(function(resolve){
    console.log("...async 4");
    const result = getNumber("Hi");
    resolve(result);
});
myPromise4.catch(function(error){
    console.log(error);
})



// как и в общем случае, операции, которые могут генерировать ошибку, можно
// помещать в конструкцию try..catch, а при возникновении исключения в блоке
// catch вызывать reject:
const myPromise5 = new Promise(function(resolve,reject){
    try {
        console.log("... async 5");
        getSomeWork();
        resolve("done!");
    } 
    catch (error) {
        reject(`Ошибка: ${error.message}`);    
    }
});
myPromise5.catch(function(error){
    console.log(error);
})


// кроме функции catch для получения информации об ошибке и её обработки также
// можно использовать функцию then() - её второй параметр представляет
// обработчик ошибки, который в качестве параметра получает переданное из
// reject 
/*
    promise
        .then(function(value){
            // получение значения
        },
        function(error) {
            // обработка ошибки
        });
*/

function generateNumber(str) {
    return new Promise(function(resolve, reject){
        const parsed = parseInt(str);
        if (isNaN(parsed))
            reject("Value is not a number")
        else
            resolve(parsed);
    }).then(function(value){
        console.log("Result: ", value);
    },
    function (error) {
        console.log("Error: ", error);
    });
}

generateNumber("23");
generateNumber("hello");
