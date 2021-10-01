// параметры по умолчанию

const createPost = (title, text, date) => {
    return {
        title: title,
        text: text,
        date: date
    }
}

const post = createPost("Новый Год!", "Скоро будет 2022!", "01.10.2021");
console.log(post);

// случай когда параметр даты не передаётся (sic!)
const createPost2 = (title, text, date) => {
    date = date || new Date().toLocaleDateString(); // если date не передан (не false) то с помощью или передавали значение
    return {
        title: title,
        text: text,
        date: date
    }
}

const post2 = createPost2("Новый Год!", "Скоро будет 2022!");
console.log(post2); // то же самое! sic!

// благодаря ES6
const createPost3 = (title = "default header", text = "default text", date = new Date().toLocaleDateString()) => {
    return {
        title: title,   // кстати в ES6 если название ключа объекта совпадает со значение, то можно опустить и оставить только title
        text: text,
        date: date
    }
}

const post3 = createPost3("Новый Год!", "Скоро будет 2022!");
const post3_1 = createPost3();
console.log(post3); // ну это уже лучше
console.log(post3_1);

const createPost4 = (title = "default header", text = "default text", date = new Date().toLocaleDateString()) => {
    return { title, text, date}
}
const post4 = createPost4("Node POWER!", "yass!", "today");
console.log(post4)

// писец