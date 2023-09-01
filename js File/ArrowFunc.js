// Arrow Function
// arrow function are introduced in ES6.
// which provide you a more accurate way to write the function in javascript.
// arrow function are anonymous function. they don't  declare without function keyword.

// example

const test = () => console.log("Hello Arrow Function");
test()

const firstName = "Hello"
const lastName = "world"

const test1 = (firstName,lastName) => {
    const valeu = `${firstName} ${lastName}`
    console.log(valeu);
}
test1(firstName,lastName);

const test2 = () => {
    return "Hello...."
}

test2()

const test3 = (x,y) => {
    return x * y
}

console.log(test3(3,4));