// объекты


const createCar = (name, model) => {
    return {name, model}    // какбы ключ name: значение name, ключ model значение model !!!
}

// тут нельзя было убрать фигурные скобки и оставить так:
// createCar = (name, model) => {name, model}, потому как {} - были бы телом функции
// НО! есть костыль в виде (name, model) => ({name, model})

const ford = createCar("Ford", "M1");
console.log(ford);

const yearField = "year";

const bmw = {
    name: "BMW",
    ["model"]: "X6 Sport",   // динамическое поле
    [yearField]: 2018,

    // метод
    logFields() {
        //console.log(this.name, this.model, this.year);    // но this всегда повторяется
        // поэтому деструктуризация:
        const {name, year, model} = this;
        console.log(name, year, model);
    }
}

console.log(bmw);
bmw.logFields();

// const year = bmw.year;
const {year} = bmw
console.log(year)   //sic!! - часто применяется в импортах и экспортах (webpack)