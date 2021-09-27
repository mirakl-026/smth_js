// функции

var currentYear = 2021;
var carName = "Ford";
var carYear = 2008;

var driverYear = 1990;

// if (calculateAge(currentYear, carYear) < 10) {
//     console.log("Возраст " + carName + " меньше 10 лет");
// } 
// else {
//     console.log("Возраст " + carName + " больше 10 лет");
// }

// if (calculateAge(currentYear, driverYear) < 20) {
//     console.log("Возраст водителя меньше 10 лет");
// } 
// else {
//     console.log("Возраст водителя больше 20 лет");
// }


// вычислет возраст объекта
function calculateAge (currentYear, objectYear) {
    return currentYear - objectYear;
}


function checkAndLogAge(year, objType, comparedAge) {
    var addition = objType === "_driver" ? "водителя" : objType;

    if (calculateAge(currentYear, year) < comparedAge) {
        console.log("Возраст " + addition + " меньше " + comparedAge + " лет");
    } 
    else {
        console.log("Возраст " + addition + " больше " + comparedAge + " лет");
    }
}

checkAndLogAge(carYear, carName, 10);
checkAndLogAge(driverYear, "_driver", 25);