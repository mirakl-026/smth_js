// логические операторы + условные операторы

/*

    && | true  | false
  true | true  | false 
 false | false | false   

    || | true  | false
  true | true  | true 
 false | true  | false   

  && (и) - true если все значения true
  || (или) - true если хотя бы одно значение true
  !(нет) - инвертирует true или false

*/

var carName = 'Ford'
var carYear = 2007

var currentYear = 2021
var carAge = currentYear - carYear

// если в.м. меньше 5 лет ...
// если в.м. больше или равно 5 и меньше или равно 10 ...
// иначе другое
if(carAge < 5) {
    console.log(carName + ':молодо зелено')
} else if (carAge >= 5 && carAge <= 10) {
    console.log(carName + ':бывалый')
} else {
    console.log(carName + ':ветеран')
    console.log('Возраст ' + carName + ' ' + carAge)
}

// if(0) - false
// if(null) - false
// if(undefined) - false
// if('') - false
// if(NaN) - false

// if('smth') - true
// if(4) - true
// if({}) - true
// if([]) - true
var obj = { a:1 }
var obj2 = { }
if ({}) {
    console.log('true')
} else {
    console.log('false')
}

[] ? console.log('T:true') : console.log('T:false')

var personAge = 16
//var message

// if (personAge < 18) {
//     message = 'Человек ещё не совершеннолетний'
// } else {
//     message = 'Человек совершеннолетний'
// }
var message = personAge < 18 ? 'Человек ещё не совершеннолетний' : 'Человек совершеннолетний'
console.log(message);