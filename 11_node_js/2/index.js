// подключаем Express
const express = require("express"); // без . и / - значит лезть в node_modules

// объект приложения (сервера)
const app = express();

// чутка роутинга, чтобы не ловить ошибку
app.get("/", (requset, response) =>{
    response.end("Hi there from NodeJS!");
});

app.listen(3000, () =>{
    console.log("Server has started on port 3000...");
});

// запускаем приложение node index
// но лучше nodemon
// - скрипты в package json - start prod

