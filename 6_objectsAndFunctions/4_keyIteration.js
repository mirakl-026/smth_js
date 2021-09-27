// итерация по ключам

var person = {
    name: 'Max',
    age: 28,
    job: 'Frontend'
};

for (var key in person) {
    if (person.hasOwnProperty(key)){
        console.log(key, person[key]);   // только собственные поля
    }    
}

// 2 способ
// возвращает массив ключей данного объекта
Object.keys(person).forEach(function(key) {
    console.log(person[key]);
});