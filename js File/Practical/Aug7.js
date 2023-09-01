// 1. binarySearch
function binarySearch(arr,target){
    let leftPointer = 0
    let rightPointer = arr.length - 1   // rightPointer = 7

    while (target <= rightPointer) {
        let middleware = Math.floor((leftPointer + rightPointer) / 2);
        // console.log(middleware);
        if(target <= arr[middleware]){
            return middleware
        }else if(target <= arr[middleware]){
            rightPointer = middleware - 1
        }else(
            leftPointer = middleware + 1
        )
    }
    return -1
}

console.log(binarySearch([-4,1,2,3,4,6,7,8],-4));


// 2. Write a function that checks if a given number is even or odd.
function checkEven(n){
    if( n % 2 === 0){
        // Beki
        return "Even"
    }else{
        // Aeki
        return "odd"
    }
}

console.log(checkEven(3));  // output : "odd"
console.log(checkEven(4));  // output : "Even"


// 3.  Implement a function to find the maximum and minimum values in an array.

function findMinMax(arr){
    if(arr.length < 2){
        return arr.length === 1 ? [arr[0]] : null
    }else{
        arr.sort((a,b) => a - b)
        // console.log(arr); //output : [ 4, 5, 7, 8, 15 ]
        return [arr[0],arr[arr.length - 1]]
    }
}

console.log(findMinMax([5,7,4,15,8]));


// 4.  Write a function that calculates the sum of all numbers from 1 to n.

function sumOfNumbers(n){
    //  (n * (n + 1)) / 2
    return (n * ( n + 1)) / 2
}

console.log(sumOfNumbers(10));  // output : 55
console.log(sumOfNumbers(5));  // output : 15

// 5 Implement a function that counts the number of vowels in a given string.

function countVowels(string){
    const result = { a:0, e:0, i:0, o:0, u:0}
    for(let x of string){
        // console.log(x);
        switch (x) {
            case "a" || "A":
                result["a"] += 1
            case "e" || "E":
                result["e"] += 1
            case "i" || "I":
                result['i'] += 1
            case "o" || "O":
                result["o"] += 1
            case "u" || "U":
                result["u"] += 1
        }
    }
    return result
}

console.log(countVowels(
    "a function tht returns the Fiboncci sequence up to  given number of to u"
));

// 6.  Write a function that returns the Fibonacci sequence up to a given number of terms.

function fibonacciSequence(n){
    let array = [0,1]
    for (let i = 2; i < n; i++) {
        let newNumber = array[ i - 2] + array[i - 1]
        // console.log(newNumber);
        array.push(newNumber)
    }
    return array
}


console.log(fibonacciSequence(5));  // output : [ 0, 1, 1, 2, 3 ]

// 7.  Implement a function that checks if a given string is a valid email address.

function checkEmail(email){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const res = validRegex.test(email)
    console.log(res);
    return res
}

console.log(checkEmail(""));    // output : false
console.log(checkEmail("vishvadattt"));    // output : false
console.log(checkEmail("vishvadattt@yopmail.com"));    // output : true
console.log(checkEmail("vishvadattt@yopmail."));    // output : false



// 8.  Write a function to reverse the order of words in a sentence.

function reverseWord(string){
    let reverseSentence = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reverseSentence += string[i]
    }
    console.log(reverseSentence);
    const reversedSentenceArray = reverseSentence.split(" ");
    console.log(reversedSentenceArray);
    let result = []
    for (let i = reversedSentenceArray.length - 1; i >= 0; i--) {
        const element = reversedSentenceArray[i];
        result.push(element)
    }
    return result.join(" ")
}

console.log(
    reverseWord("Implement a function that removes all whitespace from a string")
);  // output : tnemelpmI a noitcnuf taht sevomer lla ecapsetihw morf a gnirts


// 9.   Implement a function that removes all whitespace from a string.

function removeSpaces(string){
    let filterStr = ""
    for(let x of string){
        x === " " ? null : filterStr += x
    }
    return filterStr
}

console.log(
    removeSpaces(
        "Implement a function that removes all whit espace from a string"
      )
);  // output : Implementafunctionthatremovesallwhitespacefromastring



// 10. Factorial of given number

function factorialNumber(n){
    let sum = n
    for (let i = n - 1; i > 0; i--) {
        console.log(i);
        sum = sum * i
    }
    return sum
}

console.log(factorialNumber(7));    // output : 5040


// 11. square root of number

function squareRoot(n){
    return Math.sqrt(n)
}

console.log(squareRoot(36));    //output : 6
console.log(squareRoot(625));    //output : 25
console.log(squareRoot(81));    //output : 9


// 12. Check prime number

function CheckPrimeNumber(n){
    if(n < 2){
        return false
    }

    for (let i = 2; i <= Math.sqrt(n) ; i++) {
        if(n % i === 0){
            // beki
            return false
        }else{
            // Aeki
            return true
        }        
    }
}

console.log(CheckPrimeNumber(7));   // output : true
console.log(CheckPrimeNumber(6));   // output : false
console.log(CheckPrimeNumber(5));   // output : true


// 13. Implement a function to sort an array of objects based on a specific property value.

function sortByProperty(array,property){
    return array.sort((a,b) => {
        if(a[property] < b[property]){
            return -1
        }
        
        if(a[property] > b[property]){
            return 1
        }
    })
}

const students = [
    { name: "John", age: 20 },
    { name: "Alice", age: 18 },
    { name: "Bob", age: 22 },
  ];
console.log(sortByProperty(students,"name"));


// 14.  Write a function that finds the intersection of two arrays.

function findInteracton(arr1,arr2){
    const set1 = new Set(arr1)
    const set2 = new Set(arr2);

    const interSection = [...arr1].filter((number) => set2.has(number))
    return interSection
}

console.log(findInteracton([1, 2, 3, 4, 5], [3, 4, 9, 3, 4]));


// 15. Write a function that checks if a given year is a leap year.

function checkLeapYear(year){

    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        return true
    }else{
        return false
    } 
}

console.log(checkLeapYear(2028));   // true
console.log(checkLeapYear(2027));   // false
console.log(checkLeapYear(2024));   // true


// 16. Write a function that converts a string to title case (capitalize the first letter of each word).

function capitalize(string){
    const arrayString = string.split(" ");
    const result = arrayString.map((word) => {
        const firstLetter = word.charAt(0).toUpperCase()
        const remaiingLetter = word.slice(1)
        return firstLetter + remaiingLetter
    })
    return result.join(" ")
}

console.log(
    capitalize(
        "Write a function that converts a string to title case capitalize the"
      )
);


// 17. sortnumber

function sortNumber(string){
    let num = []
    let str = []
    for(let x of string){
        if(+x){
            num.push(x)
        }else{
            str.push(x)
        }
    }
    return `${str.join("")}${num.join("")}`
}

console.log(sortNumber("shgtw34652jbdy57gd"));