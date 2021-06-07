// строки

var str1 = 'Hello world'
var str2 = "Hello world 2"

// console.log(str1)
// console.log(str2)

var personName = 'Виктор'

var message = 'Человека зовут "' + personName + '"'
var message2 = "Человека зовут '" + personName + "'"
var message3 = 'Человека зовут \'' + personName + '\''

// console.log(message)
// console.log(message2)
console.log(message3)

var newMessage = 'Hello world!!!'
console.log(newMessage.length)
console.log(newMessage.toUpperCase())
console.log(newMessage.toLowerCase())
console.log(newMessage.charAt(1))
console.log(newMessage.indexOf('o w'))
console.log(newMessage.indexOf('none'))
console.log(newMessage.substr(1,4))
console.log(newMessage.substr(newMessage.indexOf('world'),'world'.length))
console.log(newMessage.substring(1, 3))