// rest parameter is an improved way to handle function parameter,
// allowing us to more easily hanlde various input as parameter in a function.
// the rest parameter syntax allows us to represent an indefinite number of arguments as an array.

// simple function
const sum = (a,b,c,d,e,f,g,h) => {
    return a+b+c+d+e+f+g+h
}
console.log(sum(1,2,3,4,5,6,7,8));

// rest parameter function ex1
const sum1 = (...input) => {
    let total = 0
    for(let i of input){
        total += i
    }
    console.log(total);
    return total
}

console.log(sum1(1,2,3,4,5,6,7,8));


// ex2

const sum2 = (arg1,arg2,...num) => {
    console.log(arg1,arg2,num);
    let total = 0
    for(let i of num){
        total += i
    }
    console.log(total);
    return total
}

console.log(sum2("vishvadatt","smit",6,5,8,2,1));