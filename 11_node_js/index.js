// const now = new Date().toLocaleString();

// console.log(now);
// console.log(Math.random());

// window и document - нет, они не входят в ядро JS
// а так обычный JS

// встроенные модули
const fs = require("fs");   // fs - отвечает за функционал модуля fs - работа с файлами

const data = `
    Hello from NodeJS
    I am random text
`;

fs.writeFileSync("nodejs.txt", data);

// теперь прочтём файл
const result = fs.readFileSync("nodejs.txt", {encoding:"utf-8"});   // синхронное чтение файла
console.log(result);

// глобальные переменные NodeJS
console.log(__dirname);     // путь до текущей папки
console.log(__filename);    // текущий файл