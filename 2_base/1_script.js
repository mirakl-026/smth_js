console.log('Just arg');

var message = "I'm variable"; // <-переменная
var camelMessage = "camelMessage!"; // camesCase предпочтительно, но можно змеиным регистром
var snake_message = 'snake_message!'; // змеиный регистр

var $lol = 'Dollar';
var _kek = 'underscore';

console.log(message);

/*
    Соглашение об именованиях:

    1. Инглиш офк
    2. Лушче camelCase но если очень хочется то можно snake_case
    3. используемые символы: $ _ цифры после остальных 
    4. Регистрозависимый
    5. Точка с запятой возможна, но не обязательна
        - при отсутствии возможны баги
        - но если по гайдам - можно и без
    
    6. Строки - можно использовать '', ""
        - принято использовать одинарные кавычки
*/

var messageString2 = 'message 2'
var messageString3 = "message 3"

// а теперь от себя - пошли нафиг со своими одинарными кавычками и 
// отсутствием ; - я буду ставить их везде и всегда, потому что МОГУ

var messageString4 = "message 4"; // !!
var messageString5 = "message 5";