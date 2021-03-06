// подключаем Express
const express = require("express"); // без . и / - значит лезть в node_modules
const weatherRequest = require("./requests/weather.request");


// объект приложения (сервера)
const app = express();

app.set('view engine', 'ejs');  // установка шаблонизатора
// подключаем стили (статические файлы)
app.use(express.static("public"));
app.use(express.urlencoded());



// чутка роутинга, чтобы не ловить ошибку
app.get("/", (requset, response) =>{
    response.render('index', {weather: null, error: null});   // при запросе на корневую страницу - рендерим index.ejs
});


app.post("/", async (req, res) => {
    // вычленияем значение города из запроса
    const { city } = req.body;
    // получили город - запрос по API погоды и рендер
    const {weather, error} = await weatherRequest(city);
    res.render('index', {weather, error});
});




app.listen(3000, () =>{
    console.log("Server has started on port 3000...");
});


// запускаем приложение node index
// но лучше nodemon
// - скрипты в package json - start prod

