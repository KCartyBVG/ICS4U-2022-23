// var greeting = "hello"; /**can use single or double quotes */
// //function test() {
//     if (true) {
//         var greeting = 'hi';
//     }
// //}

// let is very similar to how Java works (obeys scope and cannot redeclare)
var greeting = "Hello";
function test() {
    if (true) {
        let greeting = 'Hi';
    }
}

console.log(greeting);

const TEST_VALUE = 6;
TEST_VALUE = 5;

//to declar variables, use let
//to declare constants, use const

// == vs ==
// == compares value
// === checks value AND data type

//FALSE IS 0, TRUE IS ONE

console.log(1 == '1'); //true 
console.log(1 === '1'); //false
console.log(1 == true); // true
console.log(1 === true); //false

console.log(typeof(1)); //number
console.log(typeof(true)); //boolean

//!== co,pares values and type ensure that they are not the same 

let number1 = 6;
let number2 = 7;
let sum = number1 + number2;

const result = number1 + " + " + number2 + " = " + sum;

console.log(result);

const result2 = `${number1} + ${number2} = ${sum}`; //anything you put in back ticks, becomes part of the string
//${} cleaner to insert variable in a string
console.log(result2);
//functions

function addTwo(x) {
    return x + 2; //just gonna add two
}

console.log(addTwo(5)); //returns seven

function add(x, y, z=0) {
    //if (z == undefined)
        // z=0;

    return x + y + (typeof(z) === 'undefined' ? 0 : z); //if z is not declared, it is undefined
}

console.log(add(1, 2, 3)); //returns 6
console.log(add(1, 2)); //returns 3. default value for z is zero

let num = 7;
//ternary operator
// condition ? true : false
console.log(num%2 == 0?'even':'odd'); //'what would return if true' : 'if false'
//returns odd

//for loop

for (let index = 0; index < 7; index++) {
    console.log(index); 
}


//arrays

const colours = ['red', 'yellow', 'green', 'blue'];
for (const colour of colours) { //allows you to iterate through an iterable object. A LOT LIKE FOR EACH
    console.log(colour);
}

//objects
const car = {make: 'Ford', model: 'Mustang'};//car is not itterable?
for (const prop in car) { //for in iterates over the property names 
    console.log('${prop} : ${car[prop]}');
    //make: Ford
    //model: Mustang
}

console.log(car.make);
console.log(car['make']);

//LOOK AT MR DESLAURIES GITHUB FOR JSON STUFF