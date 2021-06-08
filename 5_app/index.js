
// есл через QuerySelector - $ в названии
var $start = document.querySelector('#start')
var $game = document.querySelector('#game')

$start.addEventListener('click', startGame)

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

}