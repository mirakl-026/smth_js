// события

// получаем доступ до элементов
var button = document.querySelector('button')
var h1 = document.querySelector('h1')
var input = document.querySelector('input')

// добавляем событие (1 способ)
function buttonHandler() {
    console.log('click')
    h1.textContent = input.value
}

button.addEventListener('click', buttonHandler)

// mdn

// CSS: background-color: blue;
// в JS нет дефисов, поэтому такие свойства переводятся в camelCase - backgroundColor

//при наведении мыши и наоброт  (2 способ)
h1.addEventListener('mouseenter', function () {
    // console.log('Mouse has entered h1')
    this.style.color = 'red'
    this.style.backgroundColor = 'yellow'
})

h1.addEventListener('mouseleave', function (){
    // console.log('Mouse has left h1')
    this.style.color = 'black'
    this.style.backgroundColor = 'transparent'
})

