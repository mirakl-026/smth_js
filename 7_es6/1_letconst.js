var color = "red";  // объявление переменной в ES5

color = "blue";

console.log(color);

// про разницу var и let - var живёт всегда , поэтому выдаст 55555
for(var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 2000);
}

// let живёт там где нужно а потом создаётся заново, 
// поэтому 0,1,2,3,4
for(let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 2000);
}

// про константы
var HEX = "#FFAABB";

// но HEX то могут поменять! и тогда и цвета не будет и ошибок!
HEX = "abvascas"

document.querySelector('h1').style.color = HEX;

const TRUE_CONST_HEX = "#AAFFBB";

TRUE_CONST_HEX = "avadasda";

document.querySelector('h1').style.color = TRUE_CONST_HEX;
// мы хотябы получим ошибку в консоли!
 

