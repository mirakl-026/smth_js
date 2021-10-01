//стрелочные функции

// // стандартный подоход
// function getAge (year) {
//     const current = new Date().getFullYear();
//     return current - year;
// }

// console.log(getAge(1993));

// // стрелочные функции складываются в переменные:
// const calculateAge = (year) => {
//     const current = new Date().getFullYear();
//     return current - year;
// }
// console.log(calculateAge(1990)) 


// вообще без скобок, если параметр 1
// const getAge = year => {
//     const current = new Date().getFullYear();
//     return current - year;
// }
// console.log(getAge(1990)) 

// const getAge = year => {
//     return new Date().getFullYear() - year
// }

// console.log(getAge(1988));

// если в стрелочной функции 1 действие, то скобки и return можно опустить
// const getAge = year => new Date().getFullYear() - year;
// console.log(getAge(1977));  // афигеть

// const logAge = year => console.log(new Date().getFullYear() - year);
// logAge(1993)

// есть ещё одно приемущество
const person = {
    age: 25,
    name: "Max",
    logNameWithTimeout: function() {
        window.setTimeout(function() {     
            console.log(this.name)  
        }.bind(this), 1000);
    }
}

// функции созданные через function - они создают собственный контекст
// стрелочные функции НЕ создают собственный контекст

const person2 = {
    age: 25,
    name: "Max",
    logNameWithTimeout: function() {    // создаём контекст к person
        window.setTimeout(() => {       // не создаёт собственный контекст, поэтму this 
            console.log(this.name)      // не к window а к person
        }, 1000);
    }
}

//logNameWithTimeout: function() {      это строку можно заменить на
//logNameWithTimeout() {

const person3 = {
    age: 25,
    name: "Max",
    logNameWithTimeout() {    // создаём контекст к person
        window.setTimeout(() => {       // не создаёт собственный контекст, поэтму this 
            console.log(this.name)      // не к window а к person
        }, 1000);
    }
}

// главное не потерять контекст!