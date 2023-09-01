// 1. Square Star Pattern in Javascript

// print row of this loop
let string = ""

// first loop are prining rows
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        string += "*"
    }
    string += "\n"
}

console.log(string);
/*
    *****
    *****
    *****
    *****
    *****
*/


// 2. Hollow Square Pattern

// try 1
let string1 = ""

// printing number of rows(5)
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if(i === 1 || i === 5 || j === 1 || j === 5){
            string1 += "*"
        }else{
            string1 += " "
        }
    } 
    string1 += "\n"   
}

console.log(string1);
string1 += "\n"
// try 2

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if(i === 1 || i === 5){
            string1 += "*" 
        }else{
            if(j === 1 || j === 5){
                string1 += "*" 
            }else{
                string1 += " " 
            }
        }       
    }    
    string1 += "\n"
}
console.log(string1);
/*
    *****
    *   *
    *   *
    *   *
    *****
*/



// 3. Left Triangle Pattern in Javascript
let string3 = ""
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        string3 += "*"            
    }
    string3 += "\n"
}

console.log(string3);
/*
    *
    **
    ***
    ****
    *****
*/

// 4. Right Triangle Pattern in Javascript
let string4 = ""
for (let i = 5; i >= 1; i--) {

    for (let j = 1; j < i; j++) {
        string4 += " "        
    }
    for (let k = 5; k >= i; k--) {
        string4 += "*"            
    }
    string4 += "\n"
}

console.log(string4);

/*
    *
   **
  ***
 ****
*****

*/

// 5. Downward Triangle Star Pattern

let string5 = ""
let n = 5

for (let i = 1; i <= 5; i++) {
    for (let j = 0; j <= 5 - i; j++) {
        string5 += "*"        
    }    
    string5 += "\n"
}
console.log(string5);

/*

*****
****
***
**
*

*/


// 6. Hollow Triangle Star Pattern

let string6 = ""

let no = 6;

for (let i = 1; i <= no; i++) {
  // printing star
  for (let j = 0; j < i; j++) {
    if(i === no){
        string6 += "*"
    }else{
        if(j == 0 || j == i - 1){
            string6 += "*"
        }else{
            string6 += " "
        }
    }
  }
  string6 += "\n";
}
console.log(string6);

/*
*
**
* *
*  *
*   *
******

*/


// 7. Javascript Pyramid Pattern

let string7 = ""


for (let i = 1; i <= 5; i++) {
    for (let j = 5; j > i; j--) {
        string7 += " "         
    }   
    for (let k = 1; k <= ((2 * i)-1); k++) {
        string7 += "*"         
    }
    string7 += "\n"
}

console.log(string7);
/*
    *
   ***
  *****
 *******
*********

*/