// интервалы и таймеры

// выполнение кода через N миллисекунд
// можно без window
// window.setTimeout(function(){
//     window.alert("Hello timeout");
// }, 2000);

// интервал - вызов колбэка через определённое время
var counter = 0;

var interval = setInterval(function () {
    console.log(counter++);
}, 2000);

setTimeout(function() {
    // для остановки интервала -
    clearInterval(interval);
}, 5000)
