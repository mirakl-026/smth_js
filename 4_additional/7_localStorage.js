// хранение данных в localStorage

// cookie
//document.cookie

// более современное - localStorage

document.querySelector('button').addEventListener('click',function(event){

    var input = document.querySelector('input').value

    // глобальный объект localStorage
    localStorage.setItem('headerText', input)

    var objectX = {
        text: 'la-la-la'
    }

    localStorage.setItem('objectX', JSON.stringify(objectX))

})

// при старте приложения будем менять заголовок
document.addEventListener('DOMContentLoaded', function() {
    console.log('loaded')

    var text = localStorage.getItem('headerText')

    // если текст - строка и при удалении пробелов - хоть что-то остаётся
    if (text && text.trim()) {
        document.querySelector('h1').textContent = text
    }

    var objectXtext
    try {
        objectXtext = JSON.parse(localStorage.getItem('objectX'))
        alert(objectXtext.text)
    } catch(e) {
        alert('def')
    }

})
