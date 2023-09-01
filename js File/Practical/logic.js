// 1. Write a function that checks if a given number is even or odd.
function checkEvn(n){
    if(n % 2 === 0){
        // Beki
        return "Even"
    }else{
        // Aeki
        return "odd"
    }
}

console.log(checkEvn(0));   //output : Even
console.log(checkEvn(1));   //output : odd
console.log(checkEvn(2));   //output : Even
console.log(checkEvn(3));   //output : odd


// 2. Implement a function to find the maximum and minimum values in an array.

function findMinMax(array){
    console.log(array.length);
    if( array.length < 2){
        return array.length === 1 ? [array[0]] : null
    }else{
        // lets sort of array
        array.sort((a,b) => a - b)
        return [array[0],array[array.length - 1]]
    }
}

console.log(findMinMax([5,7,4,15]));  //output : [4,15]


// 3. Write a function that calculates the sum of all numbers from 1 to n.

function sumOfNumbers(n) {
    //logic
    // (n * (n + 1)) / 2
    // (4 * (4 + 1)) / 2
    // (4* 5) / 2 
    // 20 / 2 = 10

    return (n * (n + 1)) / 2
}

  console.log(sumOfNumbers(4));     // output : 10
  console.log(sumOfNumbers(5));     // output : 15
  console.log(sumOfNumbers(6));     // output : 21


// 4. Implement a function that counts the number of vowels in a given string.

function countVowels(string) {
    // a e i o u    there is vowels 
    const result = { a: 0, e: 0, i: 0, o: 0, u: 0 };  
    // try1

    // for(let x of string){
    //     console.log(x);
    //     switch(x){
    //         case "a" || "A" :
    //             result["a"] += 1
    //         case "e" || "E" :
    //             result["e"] += 1
    //             break;
    //         case "i" || "I" :
    //             result["i"] += 1
    //         case "o" || "O" :
    //             result["o"] += 1
    //         case "u" || "U" :
    //             result["u"] += 1
    //     }
    // }
    // return result

    //try2
    // let res = {a:0,e:0,i:0,o:0,u:0}
    // for (let i = 0; i < string.length; i++) {
    //     const element = string[i];
    //     if(element == "a" || element == "A"){
    //         res["a"] += 1
    //     }else if(element == "e" || element == "E"){
    //         res["e"] += 1
    //     }else if(element == "i" || element == "I"){
    //         res["i"] += 1
    //     }else if (element == "o" || element == "O"){
    //         res["o"] += 1
    //     }else if(element == "u" || element == "U"){
    //         res["u"] += 1
    //     }

    // }
    // return res

}

  console.log(
    countVowels(
      "a function tht returns the Fiboncci sequence up to  given number of to u"
    )
  );    // output : { a: 0, e: 7, i: 4, o: 8, u: 13 }




  // 5.  Write a function that returns the Fibonacci sequence up to a given number of terms.

  function fibonacciSequence(number) {
    // try1
    let arr = [0,1]
    for (let i = 2; i < number; i++) {
        let newNumber = arr[i - 2] + arr[i - 1]
        arr.push(newNumber)
    }
    return arr


    //try 2

    // let x = 0
    // let y = 1
    // let fn = x + y
    // console.log(x);
    //     while (fn < 6) {
    //         fn = x + y
    //         x = y
    //         y = fn
    //         console.log(fn);
    //     }
  }
  console.log(fibonacciSequence(6));    // output : [ 0, 1, 1, 2, 3, 5 ]


// 6. Implement a function that checks if a given string is a valid email address.
function checkEmail(email){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const res = validRegex.test(email)
    console.log(res);
    return res
}
console.log(checkEmail("vishvadatt@yopmail.com"));  // output : true
console.log(checkEmail("vishvadatt@yopmail."));  // output : false
console.log(checkEmail("vishvadatt"));  // output : false


// 7. Write a function to reverse the order of words in a sentence.

function reverseWord(string) {
    let reverseSentence = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reverseSentence += string[i];
    }
    console.log(reverseSentence);
    let reversedSentenceArray = reverseSentence.split(" ")
    let result = []
    for (let i = reversedSentenceArray.length - 1; i >= 0; i--) {
        const element = reversedSentenceArray[i];
        result.push(element)
    }
    return result.join(" ")
  }
  console.log(
    reverseWord("Implement a function that removes all whitespace from a string")
  );


  // 8. Implement a function that removes all whitespace from a string.

  function removeSpaces(string) {
    let filterStr = ""
    for(let x of string){
        x == " " ? null : filterStr += x
    }
    return filterStr
  }
  console.log(
    removeSpaces(
      "Implement a function that removes all whit espace from a string"
    )
  );


  // 9. Factorial of given number

  function factorialNumber(number) {
    let sum = number
    for (let i = number - 1; i > 0; i--) {
        sum = sum * i        
    }
    return sum
  }
  console.log(factorialNumber(7)); // output : 5040

  // 10. square root of number
  function squareRoot(number) {
    return Math.sqrt(number)
  }
  console.log(squareRoot(625));


  // 10. Check prime number

  function CheckPrimeNumber(number) {
    if(number < 2){
        return false
    }
    console.log(Math.sqrt(number));
    for (let i = 2; i <= Math.sqrt(number); i++) {
        
        if(number % i === 0){
            // beki means odd 
            return false
        }
    }
    // Aeki means even
    return true
  }
  
  console.log(CheckPrimeNumber(6));
  

  // 11. Implement a function to sort an array of objects based on a specific property value.

  function sortByProperty(array, property) {
    return array.sort((a,b) => {
        if(a[property] < b[property]){
            return -1
        }
        if(a[property] > b[property]){
            return 1
        }
        return 0
    })
  }
  
  // Example usage:
  const students = [
    { name: "John", age: 20 },
    { name: "Alice", age: 18 },
    { name: "Bob", age: 22 },
  ];
  
  const sortedStudents = sortByProperty(students, "name");
  console.log(sortedStudents);


  // 12. Write a function that finds the intersection of two arrays.

  function findInteracton(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const intersection = [...set1].filter((number) => set2.has(number))
    return intersection
  }
  
  console.log(findInteracton([1, 2, 3, 4, 5], [3, 4, 9, 3, 4]));    // output : [3,4]

  // 13. Write a function that checks if a given year is a leap year.

  function checkLeapYear(year) {
    //try1
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("kk");
          return true;
        } else {
          return false;
        }
      } else {
        console.log("thi..");
        return true;
      }
    } else {
      return false;
    }

    //try2
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        return true
    }else{
        return false
    }
   
  }
  console.log(checkLeapYear(2028));


  // 14. Write a function that converts a string to title case (capitalize the first letter of each word).
  function capitalize(string) {
    const arraString = string.split(" ");
   const result = arraString.map((word) => {
      const firstLetter = word.charAt(0).toUpperCase()
      const remaingWord = word.slice(1)
      return firstLetter + remaingWord
    })
    return result.join(" ")
  }
  console.log(
    capitalize(
      "Write a function that converts a string to title case capitalize the"
    )
  );

  // 15. sortnumber
  function sortNumber(string) {
    let str = [];
    let num = [];
   
    for(let x of string){
      if(+x){
        num.push(x)
      }else{
        str.push(x)
      }
    }
    console.log(str);
    console.log(num);
    return `${str.join("")}${num.join("")}`
  }
  
  console.log(sortNumber("shgtw34652jbdy57gd"));  // output : shgtwjbdygd3465257
