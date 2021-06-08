// содержимое элементов
// CSS class -> .CLASS_NAME
// id -> #ID

var a = document.querySelector('a')
console.log(a)

var a_href = a.getAttribute('href')
var a_title = a.getAttribute('title')
console.log(a_href)
console.log(a_title)

// второй способ доступа к атрибутам
console.log(a.attributes)

// изменение атрибута
a.setAttribute('href','https://ya.ru/')
a.textContent = 'Yandex'
a.setAttribute('title','Go to Yandex')

console.log(a_href) // same
console.log(a_title)