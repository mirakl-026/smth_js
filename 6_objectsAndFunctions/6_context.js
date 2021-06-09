// контекст

// var person = {
//     age: 28,
//     name: 'Max',
//     job: 'Frontend',

//     displayInfo: function(ms) {

//         setTimeout(function() {
//             console.log('Name: ', this.name)    //
//             console.log('Job: ', this.job)      // undefined
//             console.log('Age: ', this.age)      // undefined
//         }, ms)
//     }
// }

// person.displayInfo(5000)

// var person = {
//     age: 28,
//     name: 'Max',
//     job: 'Frontend',

//     displayInfo: function(ms) {

//         console.log(this)

//         setTimeout(function() {
//             // внутри каждого скоупа (фигурных скобок)
//             // свой собственный this
//             // поэтому this - window, т.к. setTimeout - принадлежит window
//             debugger
//             console.log('Name: ', this.name)    //
//             console.log('Job: ', this.job)      // undefined
//             console.log('Age: ', this.age)      // undefined, т.к. this здесь - объект window
//         }, ms)
//     }
// }

// person.displayInfo(500)

// 1 вариант - решить можно через замыкание
// var person = {
//     age: 28,
//     name: 'Max',
//     job: 'Frontend',

//     displayInfo: function(ms) {
//         var self = this

//         setTimeout(function() {

//             console.log('Name: ', self.name)    //
//             console.log('Job: ', self.job)      // undefined
//             console.log('Age: ', self.age)      // undefined, т.к. this здесь - объект window
//         }, ms)
//     }
// }

// person.displayInfo(500)

// 2 - привязка контекста (bind) - функция внутри setTimeout
// уже не будет внутри window, а будет внутри person
var person = {
    age: 28,
    name: 'Max',
    job: 'Frontend',

    displayInfo: function(ms) {
        var self = this

        setTimeout(function() {

            console.log('Name: ', this.name)    //
            console.log('Job: ', this.job)      // undefined
            console.log('Age: ', this.age)      // undefined, т.к. this здесь - объект window
        }.bind(this), ms)
    }
}

person.displayInfo(500)

// 3 - ES6