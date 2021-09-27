// объекты

var person = {
    // поля
    name: "Вася",
    year: 1990,
    family: ["Елена","Игорь"],
    car: {
        year: 2010,
        model: "MBW X5"
    },

    // методы
    calculateAge: function() {
        // var age = 2021 - this.year;
        // console.log(this.name , age);
        this.age = 2021 - this.year;
    }
}

console.log(person);

console.log(person.name);
console.log(person["year"]);

var field = "car";
console.log(person[field].year);

person.year = 1993;
console.log(person);

person.calculateAge();
console.log(person.age);