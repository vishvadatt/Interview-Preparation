// check factorial number

//for example
// 4! = 4 * 3 * 2 * 1 = 24
// 7! = 7 * 6 * 5 * 4 * 3 * 2 * 1 = 5040

// try 1
let n = 5;
let fac = 1
let text = ""
for (n; n >= 1; n--) {
    fac = fac * n
    text = fac
    // console.log(fac);
}
// console.log(text);

// try 2
function factorWhileLoop(n){
    let result = 1
    let i = 1
    while (n >= i) {
        console.log(n);
        result = result * i
        i++
    }
    return result
}

console.log(factorWhileLoop(4));

// try 3
function factorialReduce(n){
    return Array.from({length : n},(_,i) => i + 1).reduce((acc,curr) => acc * curr , 1)
}
console.log(factorialReduce(5));


// recursive factorial number

function recursiveFactorial(n){
    if(n == 0){
        return 1
    }else{
        return n * recursiveFactorial(n - 1)
    }
}

console.log(recursiveFactorial(4)); //outout : 24
console.log(recursiveFactorial(7)); //outout : 5040

