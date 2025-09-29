const output = document.getElementById("output");

function greetNamed() {
    return "Hello from Named Function!";
}
document.getElementById("btnNamed").onclick = () => {
    output.textContent = greetNamed();
};

const greetAnonymous = function() {
    return "Hello from Anonymous / Expression Function!";
};
document.getElementById("btnAnonymous").onclick = () => {
    output.textContent = greetAnonymous();
};

const greetArrow = () => "Hello from Arrow Function!";
document.getElementById("btnArrow").onclick = () => {
    output.textContent = greetArrow();
};

document.getElementById("btnIIFE").onclick = () => {
    (function() {
        output.textContent = "Hello from IIFE!";
    })();
};

function doOperation(num, callback) {
    return callback(num);
}
const double = n => n * 2;
document.getElementById("btnCallback").onclick = () => {
    output.textContent = "Double of 5 = " + doOperation(5, double);
};

function Person(name, age) {
    this.name = name;
    this.age = age;
}
document.getElementById("btnConstructor").onclick = () => {
    const user = new Person("Neha", 22);
    output.textContent = `Person: ${user.name}, Age: ${user.age}`;
};

async function fetchData() {
    return "Data fetched asynchronously!";
}
document.getElementById("btnAsync").onclick = async () => {
    const data = await fetchData();
    output.textContent = data;
};

function factorial(n) {
    if(n === 0) return 1;
    return n * factorial(n-1);
}
document.getElementById("btnRecursive").onclick = () => {
    output.textContent = "Factorial of 5 = " + factorial(5);
};
