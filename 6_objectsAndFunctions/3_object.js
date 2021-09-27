// ещё про объекты и функции

// два параметра - 1 - прототип объекта, 2 - описывает свойств данного объекта
var ford = Object.create({
    // прототип объекта
    calculateDistancePerYear: function() {
        // age
        Object.defineProperty(this, "distancePerYear", {
            value: Math.ceil(this.distance / this.age),
            enumerable: true,
            writable: false,
            configurable: false
        });
    }
}, {
    // свойства объекта ford
    // читать в mdn - Object.getOwnPropertyDescriptor()
    name: {
        value: "Ford",
        enumerable: true,   // флаги контроля ключей
        writable: false,
        configurable: false
    },
    model: {
        value: "Focus",
        enumerable: true,
        writable: false,
        configurable: false
    },
    year: {
        value: 2015,
        enumerable: true,
        writable: false,
        configurable: false
    },
    distance: {
        value: 120500,
        enumerable: true,
        writable: true,
        configurable: false
    },
    age: {
        enumerable: true,
        get: function() {
            console.log("Получаем возраст")
            return new Date().getFullYear() - this.year
        },
        set: function () {
            console.log("Устанавливаем возраст")
        }
    }
});

console.log(ford);

ford.calculateDistancePerYear();

// обход по всем ключам - по всем у кого ключ enumerable true
for (var key in ford) {
    if (ford.hasOwnProperty(key)) {
        console.log(key, ford[key]);
    }    
}