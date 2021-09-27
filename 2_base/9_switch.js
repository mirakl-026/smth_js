// switch case

var carColor = "red";

if (carColor === "red"){
    console.log("Цвет машины красный");
} 
else if (carColor === "yellow") {
    console.log("Цвет машины жёлтый") ;
} 
else if (carColor === "green") {
    console.log("Цвет машины зелёный");
} 
else {
    console.log("Цвет машины какой-то");
}


carColor = "green";
switch (carColor) 
{
    case "red":
        console.log("Цвет машины красный");
        break;
    case "green":
        console.log("Цвет машины зелёный");
        break;
    case "yellow":
        console.log("Цвет машины жёлтый");
        break;
    default:
        console.log("Цвет машины какой-то");
}