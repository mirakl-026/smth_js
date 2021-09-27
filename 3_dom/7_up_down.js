// события

var divs = document.querySelectorAll("div");

// от текущего к родителю
for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function() {
        console.log(this.getAttribute("id"));  
    }); // на погружение
}


// от родителя к текущему
// for (var i = 0; i < divs.length; i++){
//     divs[i].addEventListener("click", function() {
//         console.log(this.getAttribute("id"));
//     }, true); // на всплытие
// }