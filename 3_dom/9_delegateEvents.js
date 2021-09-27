// стандартный способ
// var ps = document.querySelectorAll("p");

// for (var i = 0; i < ps.length; i++) {
//     ps[i].addEventListener("click", function(event){
//         event.target.style.color = "blue";
//     });
// }

// А ЕСЛИ 10_000 раз????
// то делегирование

// прослушка события не на каждый элемент а на весь документ
// var wrapper = document.querySelector("#wrapper");
// но getElemntById быстрее

document.getElementById("wrapper").addEventListener("click",function(event) {
    //console.log(event.target);

    // меняем цвет только у параграфов
    // console.log(event.target.tagName);
    var tagName = event.target.tagName.toLowerCase();

    if (tagName === "p"){
        event.target.style.color = "blue";
    }

    if (event.target.classList.contains("color")) {
        event.target.style.color = "red";
    }
})
