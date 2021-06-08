
// есл через QuerySelector - $ в названии
var $start = document.querySelector('#start')
var $game = document.querySelector('#game')

var score = 0

$start.addEventListener('click', startGame)
$game.addEventListener('click',handleBoxClick)

/*
    После нажатия на кнопку start - кнопка хайдится
    поле (game) становится белым
    - вызывается функция рендерБокс

    в функции рендерБокс
    - чистится поле game (удаляется предыдущий бокс)
    - создаётся див - бокс с атрибутом box:true (дата- опускается)
    - добавляется в поле

    на поле повешен обработчик событий
    - если кликнули в объект у которого box:true - счётчик попадаений score увеличивается
    и запускается функция рендебокс заново
*/

function startGame() {
    //console.log('game started')

    // после нажанитя кнопки старт - кнопка должна пропасть
    $start.classList.add('hide')    // он есть в CSS

    // красим поле в белый цвет
    $game.style.backgroundColor = 'white'

    // генерация квадратов
    renderBox()
}

// функция рандомной генерации квадратов
function renderBox () {
    // очистка поля
    $game.innerHTML = ''

    //получение размера квадрата
    var boxSize = getRandom(30,100)

    // получаем размер поля (для максимального топ и лефт)
    var gameSize = $game.getBoundingClientRect()
    var maxTop = gameSize.height - boxSize  // максимальное смещение по высоте для генерации квадрата 
    var maxLeft = gameSize.width - boxSize  // максимальное смещение по левой стороне для генерации квадрата

    var box = document.createElement('div')

    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute' // позиция относительно квадрата в котором сгенерирован
    box.style.backgroundColor = '#000'

    box.style.top = getRandom(0, maxTop) + 'px'
    box.style.left = getRandom(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
    box.setAttribute('data-box','true') // добавляет без префикса

    // помещение в #game (mdn)
    $game.insertAdjacentElement('afterbegin', box)

    // событие на блок

}

// если клиакают по квадрату
function handleBoxClick(event) {
    // проверка на box (data-box)
    if (event.target.dataset.box) {    
        score++
        renderBox()
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}