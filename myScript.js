const cars = ["Saab","Volvo","BMW","Mazda"];

console.log("Printing the cars array using index \n");
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);

cars[0] = "Honda";

console.log("Printing the cars at index 0 after modifhying the value \n");
console.log(cars[0]);

const gameStatus = ["You lost the game!", "You Won the game!"];
let result=1;
console.log("Printing the cars gameStatus array using index \n");
console.log(gameStatus[result])

console.log("Printing cars using for each");
cars.forEach( (car, index) => {console.log(car);});

console.log("Printing cars using for each with index");
cars.forEach( (car, index) => {console.log("Index:" + index + " Car Name: " + car);});

