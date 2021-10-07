// подключаем Express
const express = require("express"); // без . и / - значит лезть в node_modules

// объект приложения (сервера)
const app = express();

app.set('view engine', 'ejs');  // установка шаблонизатора

// подключаем стили (статические файлы)
app.use(express.static("public"));
app.use(express.urlencoded());

// чутка роутинга, чтобы не ловить ошибку
app.get("/", (requset, response) =>{
    response.render('index');   // при запросе на корневую страницу - рендерим index.ejs
});

app.post("/", (req, res) => {
    // console.log(req.body);    // смотрим, что в запросе
    const { city } = req.body;
    console.log(city);
    res.render('index');
});

app.listen(3000, () =>{
    console.log("Server has started on port 3000...");
});

// запускаем приложение node index
// но лучше nodemon
// - скрипты в package json - start prod

