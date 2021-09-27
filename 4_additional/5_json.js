var person = {
    name: 'Max',
    age: 26,
    job: 'GameDev',
    friends: ['Elena', 'Igor'],
    car: {
        model: 'Ford'
    }
};

// превращение в строку
console.log(JSON.stringify(person));

// парсинг в объект
var str = JSON.stringify(person);
console.log(JSON.parse(str));

var personFrom = JSON.parse(str);
console.log(personFrom.name, personFrom.friends);