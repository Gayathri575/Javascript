//global variable 
let number = 10;
const pi = 3.14;
var city = "New York";
console.log(number);
console.log(pi);
console.log(city);

//function scope
let Name ="Hello";
let same = "hi";
function myName () {
    let name = "gayathiri";
    console.log(name);
}
myName(); 
console.log(same+" "+Name); 

//block scope
if (true){
    const fruits = "apple";
    console.log(fruits);
}
console.log(fruits);


function test(){
    const car = "BMW";
    console.log(car);
}
console.log(car);