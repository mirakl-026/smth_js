// работа с датами

var date = new Date()

// mdn date
date.getDate()  // день
date.getMonth() // месяц - январь - 0

// геттеры и сеттеры

// getUTCDate - всё можно делать с префиксом UTC - тогда без привязки к таймзоне

// getTime() - миллисекунды с 1970 1 января - timestamp

// Date.now() - текущий timestamp

// var date2 = new Date(1000*3600*24)
// Fri Jan 02 1970 03:00:00 GMT+0300 (Москва, стандартное время)