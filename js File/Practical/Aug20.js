// 1. Write a function that checks if a given number is even or odd.
function checkEven(n){
    if(n % 2 === 0){
        // Even means Beko
        return "Even"
    }else{
        // odd means Aeki
        return "Odd"
    }
}

console.log(checkEven(4));  // output : Even
console.log(checkEven(3));  // output : odd


// 2. Implement a function to find the maximum and minimum values in an array.

function findMinMax(array){
    const newArray = array.sort((a,b) => a - b)
    console.log(newArray);
    return [newArray[0],newArray[newArray.length-1]]
}

let arr1 = [10,15,5,7,25,35]
console.log(findMinMax(arr1));

// 3. Write a function that calculates the sum of all numbers from 1 to n.
function sumOfNumber(n){
    return (n * (n+1) / 2)
}

console.log(sumOfNumber(5));    // output : 15
console.log(sumOfNumber(15));    // output : 120


// 4. Implement a function that counts the number of vowels in a given string.

function countVowels(str){
    // a e i o u are vowels
    const result = {a:0, e:0, i:0, o:0, u:0}

    for(let x of str){
        switch (x) {
            case "a" || "A":
                result["a"] += 1
            case "e" || "E":
                result["e"] += 1
            case "i" || "I":
                result["i"] += 1
            case "o" || "O":
                result["o"] += 1
            case "u" || "U":
                result["u"] += 1
        }
    }
    return result
}

const string = "a function tht returns the Fiboncci sequence up to  given number of to u"
console.log(countVowels(string));   // output : { a: 1, e: 8, i: 12, o: 17, u: 23 }


// 5.  Write a function that returns the Fibonacci sequence up to a given number of terms.

function fibonacciSequence(n){
    const arr1 = [0,1]
    for (let i = 2; i < n; i++) {
        let res = arr1[i - 2] + arr1[i - 1]
        arr1.push(res)
    }
    return arr1
}

console.log(fibonacciSequence(5));  // output : [ 0, 1, 1, 2, 3 ]
console.log(fibonacciSequence(10));  // output : [0, 1,  1,  2,  3,5, 8, 13, 21, 34 ]


// 7. Write a function to reverse the order of words in a sentence.

function reverseWord(string){
    let reverseSentace = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reverseSentace += string[i]
    }
    let reversedSentenceArray = reverseSentace.split(" ");
    let newArr = []
    for (let i = reversedSentenceArray.length - 1; i >= 0; i--) {
        const element = reversedSentenceArray[i];
        newArr.push(element)
    }
    return newArr.join(" ")
}

console.log(
    reverseWord("Implement a function that removes all whitespace from a string")
  );

// try 2
const str = "Implement a function that removes all whitespace from a string"

const newStr = reverseWord1(str,"")
console.log(newStr);

const reverseEachWord1 = reverseWord1(newStr," ")
console.log(reverseEachWord1);

function reverseWord1(string,separtor){
    let newStr1 = string.split(separtor).reverse().join(separtor)
    return newStr1;
}

// console.log(
//     newStr1
// );