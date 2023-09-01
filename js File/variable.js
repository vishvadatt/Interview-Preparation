// var
// the var statement declare a variable.
//  createing a variable in javascript is called "declaring" a variable.
// To assign a value to variable use the equal sign
// var ko Aap multiple time declare kar sakte hai with a value.
// and multiple time assign kar sakte hai.
// vo ek global scope hai.


var carName = "Volvo";  // decalre a variable with value
console.log(carName);   // output : Volvo
var carName = "Thar"    // redeclare a variable
console.log(carName);   //  output : Thar
carName = "BMW"         //reassign a value.
console.log(carName);   // output : BMW     

function test(){
    console.log("inner...",carName);
    console.log("test function");
}
console.log("outer..",carName);
test(0)


// const
// the const statement declare a variable.
// const ko Aap ek baar declare kar sakte hai with value. then usko redeclare and reassign nahi kar sakte.
//example

//global declare a variable
// const car = "Audi"  // declare a variable using a const
// console.log(car);   // output : Audi
// var car = "Zag";    // output : 'car' has already been declared
// car = "Zag"             // re-assign a variable.
// console.log(car);       // output : Assignment to constant variable.

const car1 = "abcdef"
function test2(){
    // scope variable
    const car = "Audi..."
    // car1 = "XYZ"     //re-assign a variable
    console.log("test2 function");
    console.log(car);
    // console.log(car1);  //output : Assignment to constant variable. beacuse they are not reassign.
}

test2()
// console.log(car);   //  output : car is not defined     because they are scope variable.


// let()
// the let statement declare a variable.
// let ko Aap ek bar declare kar sakte hai. then usko re-declare nahi kar sakte.
// but re-assign kar sakte hai.
// global declare a variable

let bike;            // declare a variable using a let
console.log(bike);   // output : undefined
bike = "TVS"         // assign a value to variable
console.log(bike);   // output : TVS
bike = "Honda"      // re-assing a value to variable
console.log(bike);  //  output : Honda
// let bike = "Hero"   // re-declare a variable
// console.log(bike);  // output : 'bike' has already been declared 

let newBike;
function test3(){
    newBike = "KTM"
    console.log("test3 function");
    console.log(newBike);
}
test3()
console.log(newBike);   // output : newBike is not defined      beacuse they are scope variable.
