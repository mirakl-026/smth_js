// циклы

var numbers = [1,2,3,4,5,6];

numbers.push("bleh");
numbers.unshift(10);

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// чётные
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }    
}

// тоже чётные
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        continue;
    }    
    console.log(numbers[i]);
}

// нечётные
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        console.log(numbers[i]);
    }   
}

numbers.push(11);

// просто
for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") {
        break;
    }   
    console.log(numbers[i]);
}
