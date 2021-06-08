// события

var divs = document.querySelectorAll('div')
var link = document.querySelector('a')


// от текущего к родителю
for (var i = 0; i < divs.length; i++) {

    // на погружение 
    divs[i].addEventListener('click', function() {
        // console.log(event)
        event.stopPropagation();    // (для блокирвки родительского вызова)
        console.log(this.getAttribute('id'))
    }) 
}

link.addEventListener('click', handleLinkClick)

function handleLinkClick(event){
    // отмена поведения по умолчанию (переходу по ссылке)
    event.preventDefault()

    // переключение видимости
    var div = divs[0]

    // if (div.style.display === 'none') {
    //     div.style.display = 'flex'
    // } else {
    //     div.style.display = 'none'
    // }
    div.style.display = div.style.display === 'none'? 'flex' : 'none'

    console.log(div.style.display)
}
