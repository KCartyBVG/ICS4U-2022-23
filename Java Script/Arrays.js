//cd changes directory -  cd 'Java Script'
//cd.. goes back a directory

let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// join
// console.log(fruits.join());
// console.log(fruits.join('--'));

/**PUSH AND POP CHANGE FROM THE END */

// push
// fruits.push('Kiwi'); //push string on to the array
// console.log(fruits.join());
// fruits.push(['Strawberry', 'Blueberry']); //pushing an array onto another array. can store anything in an array in js
// console.log(fruits.join()); // end of the array is the top of the stack 
// fruits.push(5);
// console.log(fruits.join());

// console.log(JSON.stringify(fruits));


// pop
//console.log(fruits.pop());//pop removes & returns the last element
//console.log(fruits.join());

/**SHIFT AND UNSHIFT CHANGE FROM THE BEGINNING */

// shift
// console.log(fruits.join());
// console.log(fruits.shift());//removes from the front. returns what it removes
// console.log(fruits.join());
// unshift
// console.log(fruits.unshift('Fred')); //adds at the beginning 

// console.log(fruits.join());

// concat
// fruits = fruits.concat(['Strawberry', 'Blueberry']); //joins it and concats it (links it together in a longer chain series - definition of concat)
// console.log(JSON.stringify(fruits));

// slice
// fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// citrus = fruits.slice(3);
// console.log(citrus);
// console.log(fruits);

// fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// citrus = fruits.slice(1, 3); // doesnt remove, only grabs    
// console.log(citrus); // returned ["Orange", "Lemon"]
// console.log(fruits);

// splice
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); //start at two, get rid of 0 things
// console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango", "Pinapple", "Cherry"];
fruits.splice(2, 1, "Lemon", "Kiwi"); // start at 2, get rid of 1 things
console.log(fruits);
