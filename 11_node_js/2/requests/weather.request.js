// вынос запроса в отдельный модуль
// библиотека node request promise - deprecated
/*
    Владилен ставит requesr, request-promise
    в файле:

// не смотря на отдельный файл - просто require
const rp = require("request-promise");

//асинхронный запрос в виде функции и экспортировать её

//module.exports = function() {}
// module.exports = {
//     request: function() {

//     }
// }

// данный модуль работает как замыкание (в экспорт попадёт)
// только функция
module.exports = async function(city) {
    if (!city) {
        throw new Error("err: empty city!");
    }
    console.log("city: ", city);
}
*/

// а я думал Axios подключать нужно будет лол

module.exports = async function(city) {
    if (!city) {
        throw new Error("err: empty city!");
    }
    console.log("city: ", city);
}