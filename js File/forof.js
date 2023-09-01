// for-of and for-in are two different looping constructs in javascript.

// for of used to iterate over the values in an iterable object,such as an array or a string.
// it allows you to access the values of the object directly, without haveing the index.

// it lets you loop iterable  data structure such as Arrays,strings,Maps etc.

// syntax
// for(variable of iterable){
//     // code block to be executed
// }

// variable : variable can be declare with const, let, var.

// example

//Looping over an Array
const cars = ["BMW","Volvo","Mini"];
let text = ""
for(var car of cars){
    // console.log(car);
    text += car
}
// console.log(text);


// Looping over a String
let language = "javascript"

for(let x of language){
    console.log(x);
}
