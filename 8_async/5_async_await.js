// метод fetch
// упрощение синтаксиса промиса за счёт async wawit

document.querySelector("#load").addEventListener("click",load);

// делаем функцию асинхронной
async function load() {
    var url = "https://jsonplaceholder.typicode.com/users"; 
    
    
    // fetch(url) 
    // .then(function(response){
    //     return response.json();  // тоже промис
    // })
    // .then(function(data){
    //     var ul = document.querySelector("#list");

    //     var html = data.map(function(item){
    //         return "<li>" + item.id + " " + item.name + " (" + item.email + ")</li>";
    //     }).join(" ");

    //     ul.insertAdjacentHTML("afterbegin", html);
    // });

    var response = await fetch(url);
    var data = await response.json();

    var html = data.map(function(item){
        return "<li>" + item.id + " " + item.name + " (" + item.email + ")</li>";
    }).join(" ");

    document.querySelector("#list").insertAdjacentHTML("afterbegin", html);
}