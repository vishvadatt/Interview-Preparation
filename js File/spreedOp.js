// the javascript spread operator (...) allows us to quickly copy all or part of an existing array or 
// object into another array or object.

// example

const numberOne = [1,2,3];
const numberTwo = [4,5,6];

const numberCombined = [...numberOne,...numberTwo]
console.log(numberCombined);    // output : [1,2,3,4,5,6]

// the spread operator is often used in combination with de-structuring.
const numbers = [1,2,3,4,5,6];
const [one,two,...rest] = numbers
console.log(one);       // output : 1
console.log(two);       // output : 2
console.log(...rest);   // output : 3 4 5 6


// we can use the spread operator with objects too.
const myVehicle = {
    brand : "Ford",
    model : "Mustang",
    color : "black"
}

const updateMyVehicle = {
    type : "car",
    year : "2021",
    color : "yellow"
}

const myUpdateVehicle = {...myVehicle,...updateMyVehicle}
console.log(myUpdateVehicle);

// Notice the properties that did not match were combined, but the property that did match, color, was overwritten by the last object that was passed, updateMyVehicle. The resulting color is now yellow