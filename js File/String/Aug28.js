// 1. length
const abcd = "abcdefghijklmnopqrstuvwxyz";
console.log(abcd.length);   // output : 26


// 2. toLowerCase
// this method convert a string to lowercase letters.
const var1 = "THIS IS A SOME TEXT"
console.log(var1.toLocaleLowerCase());     // output : this is a some text


// 3. toUpperCase
// this method convert a string to upperCase letters.
const var2 = "this is a some text"
console.log(var2.toUpperCase());        // output : THIS IS A SOME TEXT


// 4. includes
// this include method return true if a string contains a specified string.
// otherwise it return false.
const var3 = "this is a search engine"
console.log(var3.includes("sea"));      // output : true
console.log(var3.includes("this"));      // output : true
console.log(var3.includes("This"));      // output : false


// 5. startWith
// the startwith method return a true if a string start with specified string.
// otherwise return false.
// case sensitive
const var4 = "javascript is a greate language"
console.log(var4.startsWith("java"));             // output : true
console.log(var4.startsWith("javascript"));       // output : true
console.log(var4.startsWith("Javascript"));       // output : false
console.log(var4.startsWith("is"));       // output : false



// 6. endWith
// the endwith method return a true if a string ends with specific string.
// otherwise return false.
// case sensitive
const var5 = "javascript is a greate language"
console.log(var5.endsWith("greate"));       // output : false
console.log(var5.endsWith("language"));       // output : true


// 7. search
// this method matches a string against regular expression.
// this method return the index position of the first match.
// not match then return -1 
// this method case-sensitive
let var6 = "Mr. Blue has a blue house";
console.log(var6.search("has"));    // output : 9
console.log(var6.search("Has"));    // output : -1
console.log(var6.search("Blue"));   // output : 4


// 8. match
// match method maatches a string again a regular expression.
// this method return an array with matches. 
// no data found with match then return null

let var7 = "The rain in SPAIN stays mainly in the plain";
console.log(var7.match(/in/g));     // output : [ 'in', 'in', 'in', 'in', 'in' ]
console.log(var7.match(/in/gi));    // output : [ 'in', 'in', 'IN', 'in', 'in', 'in' ]


// 9. indexOf
// this method return the position of the occurrence of a value in a string. 
// means jo usko pahela keyword milega uski position return karega.
// not match then return -1
// case-sensitive
let var8 = "Hello worlde, welcome to the universe.";
console.log(var8.indexOf("wel"));   // output : 14
console.log(var8.indexOf("Wel"));   // output : -1
console.log(var8.indexOf("e",5));   // output : 11


// 10. lastIndexOf
// this method search the string from the end to the beginning.
// this method return the index from the beginning
// value are not found then return -1 
// case sensitive
let var11 = "Hello planet earth, you are a great planet.";
console.log(var11.lastIndexOf("great"));    // output : 30
console.log(var11.lastIndexOf("Great"));    // output : -1


// 11. replace
// this method searches a string for a value.
// method return a new string with the value replaced
// they doed not change original string.

let var12 = "Visit Microsoft!";
console.log(var12.replace("Microsoft","google"));   // output : Visit google!
console.log(var12.replace("microsoft","google"));   // output : Visit Microsoft!


// 12. replaceAll
// var var14 = "I love cats. Cats are very easy to love. Cats are very popular."
// console.log(var14.replaceAll("Cats","Dogs")); 


// 13. trim
// the trim method remove whitespace from both side of a string.
// trim method does not change the original string.
const var15 = "     Hello World     "
console.log(var15.trim());


