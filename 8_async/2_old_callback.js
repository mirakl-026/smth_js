/*
    Client -> Server -> Database -> Server -> Client
*/

console.log("Клиент: хочу получить список пользователей");
console.log("...");

// запрос идёт до сервера
setTimeout(function() {
    console.log("Сервер: запрашиваю список пользователей в БД");
    console.log("...")
    // обращение к БД - тоже время

    setTimeout(function(){
        console.log("БД: формирует список пользователей");
        console.log("...")

        setTimeout(function() {
            console.log("Сервер: трансформирую для клиента");
            console.log("...");

            setTimeout(function(){
                console.log("Клиент: получил данные, отображаю");
            }, 1000);
        }, 500);
    }, 500);
}, 1000);

// ужасно всё, вложенность и кошмар ваще 
