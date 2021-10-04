// метод fetch

// jsonplaceholder - для тестов, внешний сервис, генерирующий ответы

document.querySelector("#load").addEventListener("click",load);

function load() {
    // у нас есть url
    var url = "https://jsonplaceholder.typicode.com/users"; // по которму получим JSON
    
    // есть много асинхронных запросов, но сейчас лучше так:
    fetch(url)  //загрузка данных
    .then(function(response){
        console.log("response:",response);  // используя fetch - первый then - это респонс

        return response.json(); // возвращаем новый промис с данными
    })
    .then(function(data){
        console.log("data:",data);

        var ul = document.querySelector("#list");

        // обохдим пользователей
        var html = data.map(function(item){
            return "<li>" + item.id + " " + item.name + " (" + item.email + ")</li>";
        }).join(" ");

        ul.insertAdjacentHTML("afterbegin", html);
    });
}