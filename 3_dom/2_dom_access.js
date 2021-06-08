// доступ к элементу по id (он один)
// var divPg = document.getElementById('playground')
// console.log(divPg)

// доступ к элементу по классу (их много массив (HTMLCollection) - но на самом деле псевдомассив, некоторые методы и поля недоступны)
// var p = document.getElementsByClassName('text')
// console.log(p)

// доступ к элементу по названию тега
// var h1 = document.getElementsByTagName('h1')
// console.log(h1)

// всё выше - устарело
// теперь по новому
// CSS class -> .CLASS_NAME
// id -> #ID
var divPg2 = document.querySelector('#playground')  // возвращает 1 элемент
console.log(divPg2)

var p2 = document.querySelectorAll('.text')     // возвращает не HTMLCollection а NodeList
console.log(p2)

var h12 = document.querySelectorAll('h1')
console.log(h12)

//var ul = document.querySelector('div#playground ul')
var ul_1lvl = document.querySelector('div#playground > ul')     // > - обращение к дочернему узлу
var ul_2lvl = document.querySelector('div#playground > div > ul')
console.log(ul_1lvl)
console.log(ul_2lvl)
