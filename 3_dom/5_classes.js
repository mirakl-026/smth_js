// содержимое элементов
// CSS class -> .CLASS_NAME
// id -> #ID

var a = document.querySelector('a')

var a_href = a.getAttribute('href')
var a_title = a.getAttribute('title')

// изменение атрибута
a.setAttribute('href','https://ya.ru/')
a.textContent = 'Yandex'
a.setAttribute('title','Go to Yandex')

//

var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')

box1.classList.add('red')

box2.classList.remove('blue')

var hasBoxClass = box2.classList.contains('box')
var hasBlueClass = box2.classList.contains('blue')
console.log(hasBoxClass)
console.log(hasBlueClass)

if (hasBlueClass == false) {
    box2.classList.add('blue')
}
