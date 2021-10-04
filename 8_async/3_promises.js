// Промисы

console.log("Клиент: хочу получить список пользователей");
console.log("...");


// Промис - идея промисов - создаём объект Promise и оборачиваем в него асинхронный код
// и далее мы можем более удобно манипулировать асинхронными командами
var promise = new Promise(function(resolve, reject){
    // здесь может происходить любой асихнронный код - выполняется сразу
    // работа с ответом через объект promise

    setTimeout(function(){
        console.log("Сервер: запрашиваю список пользователей в БД");
        console.log("...");
        // мы сами говорим промису, когда он завершился
        // resolve - когда мы завершили операцию (успешно)
        
        resolve();  // передаём данные в resolve
    }, 1000);

    // reject - ошибка
});

// в любом месте - после резолва - вызывается эта функция
promise.then(function() {    
    // логика после асинхронного кода
    return new Promise (function(resolve, reject) {
        setTimeout(function(){
            var users = [
                {uid: "id1", name:"Max"},
                {uid: "id2", name:"Elena"}
            ];
            // reject("БД не смогла получить список пользователей!");   // ошибка!
            console.log("БД: формирую список пользователей");
            console.log("...");

            resolve(users);
        }, 500);
    });
}).then(function(dbusers){ // полученные данные
    return new Promise (function(resolve, reject) {
        setTimeout(function(){
            console.log("Сервер: трансформирую для клиента");
            console.log("...");

            // модифицирует каждый элемент и возвращает новый массив
            var users = dbusers.map(function(user) {
                return {
                    id: user.uid,
                    firstName: user.name,
                    timestamp: Date.now()
                }
            });
            resolve(users);
        }, 500);
    });
}).then(function(users){
    setTimeout(function(){
        console.log("Клиент: получил данные, отображаю", users);
    }, 1000);
})
.catch(function(error){
    // обработка ошибки (невозможно при старых колбэках, там только через try catch)
    console.error(error);
})
.finally(function(){
    console.log("finally done!");   // finally вызывается когда вся цепочка колбэков завершится
});
