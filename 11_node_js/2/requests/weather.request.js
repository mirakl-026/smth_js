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

// подключаю axios вместо rquest-promise
const axios = require("axios");


module.exports = async function(city) {
    if (!city) {
        throw new Error("err: empty city!");
    }
    
    const KEY = "597590e43dfb3e9ec3812492fcb50cb7";
    const url = "https://api.openweathermap.org/data/2.5/weather";

    // конфигурация запроса
    const options = {
        method: 'get',
        url: url,
        params: {
            q: city,
            appid: KEY,
            units: "imperial"
        }
    }

    try {
        const response = await axios(options);
        const celsius = (response.data.main.temp - 32) * 5/9;   // перевод в цельсии
        // console.log(response);
        return {
            weather: `${response.data.name}: ${celsius}`, 
            error: null
        }
    } 
    catch (error) {
        console.log(error);
        return {
            weather: null,
            error: error.error.message
        };
    }
}