// 1. Fibonacci sequence or Fibonacci series

// fibonacci example like
// 0,1,1,2,3,5,8,13,21.....

// but if user input 100
const num = 200;
let x = 0;
let y = 1;
let fn = x + y;

// try1
console.log(x);
while(fn < num){
    fn = x + y
    // console.log(fn);
    x = y
    y = fn;
}


// try2
let a = 0
let b = 1
let c = a + b
console.log(a);
for (let i = 0; i < 10; i++) {
    c = a + b
    a = b
    b = c
}


// try3

let fibonacciSeries = (n) => {
    if(n < 2){
        console.log("n..",n);
        return n
    }
    let series = [0,1]
    for (let i = 0; i < n; i++) {
        let number = series[series.length - 1] + series[series.length - 2]
        series.push(number)
    }
    return series
}

console.log(fibonacciSeries(10));

