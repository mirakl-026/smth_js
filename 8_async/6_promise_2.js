// ещё о промисах

function sleep(ms) {
    // данная функция эмулирует задержку
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },ms);
    });
}

var p1 = sleep(1500).then(function(){
    return {
        name: "Promise 1500"
    };
});


var p2 = sleep(3000).then(function(){
    return {
        name: "Promise 3000"
    };
});

var p3 = sleep(4000).then(function(){
    return {
        name: "Promise 4000"
    };
});

// допустим нужно одновременно получить данные с разных запросов
// как засинхронизировать данные промисов?

// передаём массив промисов
// Promise.all([p1, p2, p3]).then(function(data){
//     console.log("All", data); //ждёт все промисы
// });

// race - то-же что и all, но не дожидается всех, а отрабатывает только то, кто первый
// Promise.race([sleep(1500), sleep(3000)]).then(function(){
//     console.log("Race");    // ждёт первый промис
// });
// Promise.race([p1, p2]).then(function(data){
//     console.log("Race", data);    // ждёт первый промис
// });

// race и all -тоже промисы возвращают

async function start(){
    var dataRace = await Promise.race([p1, p2]);
    var dataAll = await Promise.all([p1, p2, p3]);


    console.log("data all:", dataAll);
    console.log("dataRace:", dataRace); // данные те-же, но dataRace
}

start();