
// есл через QuerySelector - $ в названии
var $start = document.querySelector('#start')
var $game = document.querySelector('#game')
var $time = document.querySelector('#time')

var score = 0
var isGameStarted = false

$start.addEventListener('click', startGame)
$game.addEventListener('click',handleBoxClick)

/*
    После нажатия на кнопку вызывается функция start Game
    - взводится флаг isGameStarted
    - start - кнопка хайдится
    - поле (game) становится белым
    - запускается внутренний таймер браузера и ему передаётся обработчик
        который проверяет поле $time и если оно больше нуля - уменьшает его (каждые 100мс)
        если оно меньше - вызывается функция endGame опускается и объект интервал удаляется
    - вызывается функция рендерБокс

    в функции рендерБокс
    - чистится поле game (удаляется предыдущий бокс)
    - создаётся див - бокс с атрибутом box:true (дата- опускается)
    - добавляется в поле

    на поле повешен обработчик событий
    - если игра вообще есть - то ретёрн без действий
    - если кликнули в объект у которого box:true - счётчик попадаений score увеличивается
    и запускается функция рендебокс заново
*/

function startGame() {
    // взводим флаг, что игра стартанула
    isGameStarted = true;

    // после нажанитя кнопки старт - кнопка должна пропасть
    $start.classList.add('hide')    // он есть в CSS

    // красим поле в белый цвет
    $game.style.backgroundColor = 'white'


    var interval = setInterval(function() {
        var time = parseFloat($time.textContent)

        if (time <= 0) {
            // end game
            clearInterval(interval)
            endGame()

        } else {
            $time.textContent = (time - 0.1).toFixed(1)
        }
    }, 100) // каждые 100 мс

    // генерация квадратов
    renderBox()
}



function endGame(){
    isGameStarted = false
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
}

// если клиакают по квадрату
function handleBoxClick(event) {
    if (!isGameStarted) {
        return
    }

    // проверка на box (data-box)
    if (event.target.dataset.box) {    
        score++
        renderBox()
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}