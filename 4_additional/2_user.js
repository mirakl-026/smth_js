// взаимодействие с пользователем

document.querySelector('#alert').addEventListener('click',function(){
    alert('Вы успешно кликнули')
})

document.querySelector('#confirm').addEventListener('click',function(){
    var decision = confirm('Вы уверены, что хотите нажать на кнопку?')
    console.log(decision)   // true / false
    if (decision) {
        alert('Ну ладно')
    }
})

document.querySelector('#prompt').addEventListener('click',function(){
    var age = prompt('Сколько тебе лет', 18)
    if (age >= 18){
        alert('Добро пожаловать')
    } else {
        alert('Пшёл отседова, гавно, бесишь')
    }
})



console.log('Console.log')
console.warn('Console.warn')
console.info('Console.info')
console.error('Console.error')  // просто пометка в консоли - как ошибка

throw new Error('error')        // блокировка консоли - реальная ошибка