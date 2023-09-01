// https://www.fullstack.cafe/blog/javascript-code-interview-questions


// 1. push a value into array.

// A callback function is a function that is passed to another function as an argument and is executed after
//  some operation has been completed.

function modifyArray(arr,callback){
    arr.push(100)
    callback()
}
let arr = [5,10,15,20]
modifyArray(arr,() => {
    console.log("Updated Array..",arr);
});


// 2. Given a string, reverse each word in the sentence
// Problem
// For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG


var string = "example Welcome to this Javascript Guide!";

// 1st
const reverseEntireSentence = reverseBySeparator(string,"");
console.log(reverseEntireSentence);

// 2nd
const reverseEachWord = reverseBySeparator(reverseEntireSentence," ");
console.log(reverseEachWord);

function reverseBySeparator(string,separator){
    const newStr = string.split(separator).reverse().join(separator)
    return newStr
}


// ex2

var str2 = "javascript is a Best"

const newStr = reverseString(str2,"")
console.log(newStr);

const reverseEachWord1 = reverseString(newStr," ")
console.log(reverseEachWord1);

function reverseString(str,seprator){
    let newStr = str.split(seprator).reverse().join(seprator)
    return newStr
}


// 3.   How to empty an array in JavaScript?

var arrayList =  ['a', 'b', 'c', 'd', 'e', 'f'];
var anotherArrayList = arrayList
console.log(anotherArrayList);
// method 1
// arrayList = []

// method 2
// arrayList.length = 0

// method 3
arrayList.splice(0, arrayList.length); 
console.log(arrayList);


// 4.  How would you check if a number is an integer?
// Answer
// A very simply way to check if a number is a decimal or integer is to see if there is a remainder left when you divide by 1.

function isInt(num){
    return num % 1 === 0;
}

console.log(isInt(4));  // output : true
console.log(isInt(-4)); // output : true
console.log(isInt(0.3));// output : false



// 5. Implement enqueue and dequeue using only two stacks

var inputStack = []; // First stack
var outputStack = []; // Second stack

// Enqueue means to add an element
// dequeue to remove an element

function enqueue(stackInput,item){
    // push single item
    return stackInput.push(item)

    // you have a pass multiple item in array
    // return stackInput.push(...item)
}
// create array for push multiple item
// let newArr = [1,2,3,4,5]

enqueue(
    inputStack,
    // newArr,
    15
)
console.log(inputStack);


function dequeue(stackInput, stackOutput) {
    if(stackOutput?.length <= 0){
        while (stackInput.length > 0) {
            var elementToOutput = stackInput.pop()
            stackOutput.push(elementToOutput)
        }
    }
    return stackOutput.pop()
}



// 6. Make this work

// problem
// duplicate([1, 2, 3, 4, 5]); // output : [1,2,3,4,5,1,2,3,4,5]

let arr2 = [1,2,3,4,5]
function duplicate(arr){
    // the concat method create new array by merging existing array.
    return arr.concat(arr)
}

console.log(duplicate(arr2));   // output : [1,2,3,4,5,1,2,3,4,5]




// 7. Write a "mul" function which will properly when invoked as below syntax
// problem
// console.log(mul(2)(3)(4)); // output : 24
// console.log(mul(4)(3)(4)); // output : 48

// try1
function mul(x){
    return function(y){
        return function(z){
            return x * y * z;
        }
    }
}

console.log(mul(2)(3)(4));  // output : 24
console.log(mul(4)(3)(4));  // output : 48
console.log(mul(10)(20)(30));  // output : 6000

// try2
function mul1(x,y,z){
    return x * y * z
}

console.log(mul1(2,3,4));   // output : 24

// try3

const mul2 = (a) => (b) => (c) => (d) => {return a * b * c * d}     // output : 240000

console.log(mul2(10)(20)(30)(40));