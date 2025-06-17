const cars = ["Saab","Volvo","BMW","Mazda"];

cars[0] = "Honda";


const fruits = ["Banana","Orange","Lemon","Apple","Mango"];
const cirtus = fruits.slice(1,3);
console.log("Slicing fruits array");
console.log(cirtus);

const fruits_splice = ["Banana","Orange","Lemon","Apple","Mango"];
fruits_splice.splice(2,0,"Lemon","Kiwi");
console.log("Splicing fruits array");
console.log(fruits_splice);

fruits_pop = ["Banana","Orange","Lemon","Apple","Mango"];
fruits_pop.pop();
console.log("Using pop on the fruits array");
console.log(fruits_pop);

fruits_push = ["Banana","Orange","Lemon","Apple","Mango"];
fruits_push.push("Kiwi");
console.log("Using push on the fruits array");
console.log(fruits_push);



fruits_indexOf = ["Banana","Orange","Lemon","Apple","Mango"];
let index = fruits_indexOf.indexOf("Apple");
console.log("Using indexOf on the fruits array");
console.log(index);


const banana = Array.from("Banana");
console.log("Using Arrays.from on the fruits array");
console.log(banana);


fruits_includes = ["Banana","Orange","Lemon","Apple","Mango"];
result = fruits_includes.includes("Mango");
console.log("Using includes on the fruits array");
console.log(result);

