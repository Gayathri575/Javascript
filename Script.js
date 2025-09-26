let banana = 10; // number
console.log(banana);

let apple = 2.80; // number (float)
console.log(apple);

let orange = "Gayathiri"; // string
console.log(orange);

let grapes = true; // boolean
console.log(grapes);

let mango = null; // null
console.log(mango);

let pineapple; // undefined
console.log(pineapple);

let watermelon = { name: "Watermelon", color: "Green", weight: 1.5 }; // object
console.log(watermelon);

let kiwi = ["Kiwi", "Brown", 0.5]; // array
console.log(kiwi);

let strawberry = {
    name: "Strawberry",
    color: "Red",
    weight: 0.3
}; // object
console.log(strawberry.weight);

function fruit(name, color, weight) { // function
    return name + " is " + color + " and weighs " + weight + " kg.";
}
console.log(fruit("Banana", "Yellow", 1.2));

let currentDate = new Date(); // Date object
console.log(currentDate);
