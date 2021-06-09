// метод для всех массивов

/*
    Реализуйте возможность, используя прототип, чтбы у каждого
    массива был новый метод, позволяющий удваивать значение каждого
    элемента с учётом типа данных так, чтобы:
    1. для чисел - возведение в кадрат
    2. для строк - удваивание строки
    3. метод не изменял существующий массив и возвращал новый
    [1,2,3] => [1,4,9]
    [5,'Hello',6] => [25,'HelloHello',36]
*/

// это правильно работает
Array.prototype.twice = function() {
    var result = this.concat()
    for (var i = 0; i < result.length; i++) {
        if ( typeof(result[i]) === 'number') {
            result[i] *= result[i]
        } else if ( typeof(result[i]) === 'string') {
            result[i] += result[i]
        }
    }
    return result
}

// это идиоматично
Array.prototype.double = function() {
    // map - делает действие над каждым элементом
    return this.map(function(item) {
        if ( typeof(item) === 'number') {
            return Math.pow(item,2)
        } else if ( typeof(item) === 'string') {
            return item += item
        }
    })
}


var arr1 = [1,2,3]
var arr2 = [5,'Hello',6]
// var arr3 = arr1.twice()
// var arr4 = arr2.twice()
var arr3 = arr1.double()
var arr4 = arr2.double()

console.log(arr1)
console.log(arr3)
console.log('____')
console.log(arr2)
console.log(arr4)
console.log('____')

