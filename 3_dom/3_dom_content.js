// содержимое элементов
// CSS class -> .CLASS_NAME
// id -> #ID
var divPg = document.querySelector('#playground')  // возвращает 1 элемент
console.log(divPg.innerHTML)
divPg.innerHTML = '<h2 style="color: red;">From JS</h2>'
console.log(divPg.innerHTML)

var p = document.querySelectorAll('.text')     // возвращает не HTMLCollection а NodeList
console.log(p)

var h1 = document.querySelectorAll('h1')
var h1_text = h1[0].textContent
console.log(h1)
console.log(h1_text)
h1[0].textContent = 'Changed from JS'

var input = document.querySelector('input')
console.log(input.value)
