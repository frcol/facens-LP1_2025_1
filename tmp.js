let fruits = ["Banana", "Orange", "Apple", "Mango"];

// concat()	creates a new array by merging (concatenating) existing arrays
// var myChildren = myGirls.concat(myBoys);
// slice()	slices out a piece of an array into a new array
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(1,2);

let vegetables = ["Carrot", "Potato", "Tomato", "Onion"];

let all = fruits.concat(vegetables);
console.log(all); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Carrot', 'Potato', 'Tomato', 'Onion' ]

let citrus = fruits.slice(1, 3);

console.log(citrus); // [ 'Orange', 'Apple' ]