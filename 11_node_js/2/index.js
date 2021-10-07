// подключаем Express
const express = require("express"); // без . и / - значит лезть в node_modules

// объект приложения (сервера)
const app = express();

app.set('view engine', 'ejs');  // установка шаблонизатора

// подключаем стили (статические файлы)
app.use(express.static("public"))

// чутка роутинга, чтобы не ловить ошибку
app.get("/", (requset, response) =>{
    response.render('index');   // при запросе на корневую страницу - рендерим index.ejs
});

app.listen(3000, () =>{
    console.log("Server has started on port 3000...");
});

// запускаем приложение node index
// но лучше nodemon
// - скрипты в package json - start prod

