// приоритеты операций

var result =  12 - 6 / 3;
var result2 = 3 + 4 * 2;

var isGreater = 20 - 6 * 3 >= 4;
var isGreater2 = 20 - 6 * 3 >= 1;
//             3    13  14  11

var isGreater3 = 20 - 6 * (3 >= 1);


console.log("12 - 6 / 3:", result);
console.log("3 + 4 * 2:", result2);
console.log("20 - 6 * 3 >= 4:", isGreater);
console.log("20 - 6 * 3 >= 1:", isGreater2);
console.log("20 - 6 * (3 >= 1)", isGreater3);    // 14

// search: mdn operator precedence