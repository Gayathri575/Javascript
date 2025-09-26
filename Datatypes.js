let Name = "gayathiri";
let Age = 20;
let isgraduate = true;
let height = 4.9;
let color =["white","black","brown"] ;
let address;
let phone= null;
let person = { Name: "gayathiri", Age: 20, isgraduate: true, height: 4.9 };
console.log(typeof Name);
console.log(typeof Age);
console.log(typeof isgraduate);
console.log(typeof height);
console.log(typeof color);
console.log(typeof address);
console.log(typeof phone);
console.log(typeof person);
console.log(typeof person.Name);
console.log(typeof person.Age);
console.log(typeof person.isgraduate);
console.log(typeof person.height);
console.log(typeof person.color);
function info(Name, Age, isgraduate, height) {
    return Name + " is " + Age + " years old, " + isgraduate + " and " + height + " feet tall.";
}