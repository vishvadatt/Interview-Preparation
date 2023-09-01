// 1. length
// the length property return the length of an array.

const fruites = ["Banana","Orange","Apple","Mango"];
console.log(fruites.length);    // output : 4

// 2. toString()
// toString method convert an array to string of (comma separated) array values.
console.log(fruites.toString());    // output : Banana,Orange,Apple,Mango


// 3. pop
// the pop method removes the last element from an array. and return element of remove from array.
const arry = ["A","B","C","D"]
console.log(arry.pop());    // output : D
console.log(arry);          // output : ["A","B","C"]


// 4. push
// the push method add a new element to an array at the end. and return new updated array.
const newFruites = ["Mango","Apple","Orange","Banana"];
newFruites.push("Kiwi")
console.log(newFruites);    // output : [ 'Mango', 'Apple', 'Orange', 'Banana', 'Kiwi' ]


// 5. shift
// the shift method remove first element of an array.
const brand = ["Peter","Zara","Puma","Nike"]
console.log(brand.shift());     // output : Peter
console.log(brand);             // output : ["Zara","Puma","Nike"]


// 6. unshift
// the unshift method add new element to the beginning of an array. 
brand.unshift("Startbuck")
console.log(brand);     // output : [ 'Startbuck', 'Zara', 'Puma', 'Nike' ]


// 7. Array length
// the  length property provides an easy way to append a new element of an array.
const aray1 = ["A","B","C","D"];
aray1[aray1.length] = "F"
console.log(aray1);     // output : [ 'A', 'B', 'C', 'D', 'F' ]

// 8. delete
// array element can be deleted using the javascript operator delete.
const fruit = ["Banana", "Orange", "Apple", "Mango"]
console.log(delete fruit[0]);
console.log(fruit);     // output : [ <1 empty item>, 'Orange', 'Apple', 'Mango' ]


// 9. concat
// the concat method create a new array by merging existing array. they does not changes existing array.
// take number of arguments.
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys)   // output : [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]
console.log(myChildren);
// another exalple
// const myChildren1 = arr1.concat(arr2,arr3);


// 10. flat
// the flat method create a new array with sub-array element concatenated to specific depth.
const myArr = [[1,2],[2,3],[4,5,6]];
const newA = myArr.flat()
console.log(newA);      // output : [1, 2, 2, 3, 4, 5, 6 ]


// 11. slice
// the slice method can take two arguments like slice(1,4)
// they return array from start element to end previous element of end element.
// and you can pass a single parameter into slice. and return element from this index.

const names = ["smit","rohan","tejas","neel","tenish"];
// const citrus = names.slice(2)
console.log(names.slice(2));        // output : ["tejas","neel","tenish"]
console.log(names.slice(0));        // output : ['smit', 'rohan', 'tejas', 'neel', 'tenish']
console.log(names.slice(0,4));      // output : [ 'smit', 'rohan', 'tejas', 'neel' ]


// 12. splice
// you can add a some element after any index you can have use splice.
// and you have delete any element after any index then also have use splice.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,1,"Lemon","Kiwi")
console.log(fruits);    //  output : [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ]
fruits.splice(1,1,"Lemon","Kiwi")
console.log(fruits);    // output : [ 'Banana', 'Lemon', 'Kiwi', 'Lemon', 'Kiwi', 'Mango' ]


// 13. indexOf
// indexOf return a index of element you are find it.
// syntax
// indexOf("search item","start point");
// search item : you finding in array.
// startpoint : this is optional. they are starting point you have finding element in array.
// you have not find result they return -1

const indexof = ["Abhi","Aaksh","Aman","Sid","Shubham"]
const result = indexof.indexOf("Aaksh",2)
console.log(result);        // output : -1
const result1 = indexof.indexOf("Aaksh",0)
console.log(result1);       // output : 1
const result2 = indexof.indexOf("Aman",0)
console.log(result2);       // output : 2


// 14. lastIndexOf
// lastindexing are finding index of element from last.
const lastindArray = ["Abhi","Sid","Aaksh","Aman","Sid","Shubham"]
const res = lastindArray.lastIndexOf("Aksh",0)
console.log(res);       // output : -1
const res1 = lastindArray.lastIndexOf("Aman",2)
console.log(res1);      // output : -1
const res2 = lastindArray.lastIndexOf("Aman",5)
console.log(res2);


// 15. filter
// filter method is used to create a new array from given array consisting of only those elements from
// satisfy condition.
const filterArray = [15,5,20,1,30,45]
const res3 = filterArray.filter((el) => el >= 10)
console.log(res3);


// 16. reduce
// the reduce method in javascript is used to reduce the array to a single value and execute a provided
// function for each value of the array.

// syntax
// array.reduce(function (total,currentValuem,currentIndex,arr),initialvalue)
const item = [20,10,30,35,40,45,50] 
const result3 = item.reduce((total,currentValue,index,item) => {
    // return total + currentValue
    // return total * currentValue
    return total % currentValue

})
console.log(result3);   // Plus output : 230
console.log(result3);   // multiple output : 18900000000
console.log(result3);   // mod output : 0



// 17. sort
let numbers = [20, 5.2, -120, 100, 30, 0];
console.log(numbers.sort());    // output : [ -120, 0, 100, 20, 30, 5.2 ]


// 18. reverse
console.log(numbers.reverse()); // output : [ 5.2, 30, 20, 100, 0, -120 ]


// 19. isArray
// isArray check your variable are array or not. if you have multiple variable they check which variable are array..
// your variable are array then return true otherwise false.

const a = "String"
const resItem = Array.isArray(a)
console.log(resItem);       // output : false

const abc = [12,30]
const resItem1 = Array.isArray(abc)
console.log(resItem1);      // output : true

const bool = true
const resItem2 = Array.isArray(bool)
console.log(resItem2);      // output : false


// 20. join
// the join method create and returns a new string by concateenating all of the elmenents in an array.
const india = ["I","N","D","I","A"]
console.log(india.join(""));


// 21. inClude
// include function check value are exist or not in array. if value are exist then return true otherwise false.
// there is a case-sensitive
const A = ["tejas","rohan","smit","vishva"]
console.log(A.includes("tejas"));   // output : true
console.log(A.includes("Tejas"));   // output : false
console.log(A.includes("smit"));   // output : true
console.log(A.includes("sMit"));   // output : false


// 22. some
// the javascript some method checks the wheater at least one of the elements of the array satisfy the condition.
// condition are match they return true otherwise return false.
const B = [1,2,3,4,5,6]
console.log(B.some((data,index) => data > 6));      // output : false
console.log(B.some((data,index) => data >= 6));      // output : true
console.log(B.some((data,index) => data >= 5));      // output : true


// 23. every
// the javascript every method check wheater all the elements of the array are satisfy the condition.
// if all element conditon are satisfy then true otherwise false.
const C = [10,15,20,25,30]
const res6 = C.every((data,i) => data > 18)
console.log(res6);      // output : false
const res7 = C.every((data,i) => data >= 10)
console.log(res7);      // output : true


// 24. find
// the find method is used to get the value of the first element in array that satisfy the provided condition.
const D = [11,15,18,20,25];
console.log(D.find((data,i) => data > 18));     // output : 20

console.log(D.find((data,i) => data >= 18));     // output : 18


// 25. findIndex
// findMethod is used to get the value of the first element of the index in array that are satisfy the condition.
const E = [11,15,18,20,25]
console.log(E.findIndex((data,i) => data > 18));    // output : 3 because 20 on 3 no index


// 26. valueOf
// this method is used for print  the element of array or string.
const F = "String"
console.log(F.valueOf());       // output : String


// 27. fill
// the fill method fills all the lement in array with a static value.
const G = ["A","B","C"]
console.log(G.fill("R"));       // output : ["R","R","R"]


// 28. entries
// this method is used to get a new array that contains the key and value pairs for each index of array.
let languages = ["HTML", "CSS", "JavaScript", "ReactJS"];
let g = languages.entries()
console.log(g);
for(let x of g){
    console.log(x);
}

