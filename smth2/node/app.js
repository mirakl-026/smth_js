// const http = require("http");

// http.createServer( function(request, response) {
//     response.end("Hello from NodeJS!");
// }).listen(3000, "127.0.0.1", function(){
//     console.log("Server started - app...");
// });

// http.createServer( function(request, response) {
//     response.end("Hello from NodeJS2!");
// }).listen(3001, "127.0.0.1", function(){
//     console.log("Server started - app2...");
// });

// const os = require("os");
// const greeting = require("./greeting");
// const User = require("./user");

// let userName = os.userInfo().username;

// console.log(`Дата запроса: ${greeting.date}`);
// console.log(greeting.getMessage(userName));

// let eugene = new User("Ujin", 28);
// eugene.sayHi();

// console.log(greeting.someInfo);
// const gr1 = require("./greeting");
// gr1.someInfo = "Atomo";

const welcome = require("./welcome")

welcome.getMorningMessage();
welcome.getEveningMessage();

