// list of Array methods
// 1. Length
// The length Property return the length of an array.

const fruites = ["Banana","Orange","Apple","Mango"];
console.log(fruites.length)

// 2. toString()
// toString methods convert an array to string of (comma separated) array values.
console.log(fruites.toString())

// 3. pop
// the pop method removes the last element from an array. and return element of remove from array.
const arry = ["A","B","C","D"]
console.log(arry.pop())
console.log(arry);

// 4. push 
// the push methods add a new element to an array at the end: and retuen new updated array.
const newFruites = ["Mango","Apple","Orange","Banana"];
newFruites.push("Kiwi");
console.log(newFruites);

// 5. shift
// the shift method removes the first array element.
const brand = ["Peter","Zara","Puma","Nike"]
console.log(brand.shift())
console.log("brand..",brand);

// 6. unshift
console.log(brand.unshift("Startbuck"))
console.log(brand)

// 7. Array length
// the length property provides an easy way to append a new element of an array.
const aray1 = ["A","B","C","D"];
aray1[aray1.length] = "F"
console.log(aray1);

// 8. delete
// array element can be deleted using the javascript operator delete.
const fruit = ["Banana", "Orange", "Apple", "Mango"]
delete fruit[1]
console.log(fruit[1])
console.log(fruit);
//output:= [ 'Banana', <1 empty item>, 'Apple', 'Mango' ]
// delete item return undefind from aray.



// 9. concat()
// the concat method create a new array by merging existing array.
// the concat method does not change an existing arrays. it always return a new array.
// the concat method can take any number of array arguments.

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren1 = arr1.concat(arr2,arr3);
console.log(myChildren1) 

// the concat method can also take string as arguments.
const arr12 = ["Emil", "Tobias", "Linus"];
const myChildren3 = arr12.concat("Peter");
console.log(myChildren3);



// 10.flat()
// the flat() method create a new array with sub-array elements concatenated to specific depth.
const myArr = [[1,2],[2,3],[4,5,6]];
const newA = myArr.flat()
console.log(newA);



// 11. slice()
// slice method can take two arguments like slice(1,4)
// they return array from start element to end previous element of end element.
//  and you can pass a sigle parameter into slice. and they return element from this index.
const names = ["smit","rohan","tejas","neel","tenish"];
const citrus = names.slice(2);
// console.log(names);
// console.log(citrus);


// 12. splice()
// you have add a some element after any index you can have use splice.
// and you have delete any element after any index then also have use splice.
// syntax
// array.splice(2,0,"Lemon"m,"Kiwi")
    //  the first parameter (2) defined the position where new element shoud be added.
    //  the second parameter (0) defines how many element should be removed.
    //  the rest of  the parameter("Lemon","Kiwi") define the new elements to be added.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits);


// 13. indexOf()
//  indexOf() return a index of elemment you are find it.
// syntax
// indexOf("search item",startPoint)
// search item : that is a string. you have finding in array. they got it and then return index of element.
// startPoint : there is a optional. they are starting point you have to finding element in array.
// you have a pass wrong argument like element they return -1 always.
const indexof = ["Abhi","Aaksh","Aman","Sid","Shubham"]
const result = indexof.indexOf("Aaksh",2)
console.log(result);


// 14. lastIndexOf()
// lastIndexOf are finding index of element from last.
// syntax
// search item : that is a string. you have finding in array. they got it and then return index of element.
// startPoint : there is a optional. they are starting point you have to finding element in array.
// lastIndexOf("searchitem",startPoint)

const lastindArray = ["Abhi","Sid","Aaksh","Aman","Sid","Shubham"]
const res = lastindArray.lastIndexOf("Aaksh",4)
console.log(res);


// 15. filter()
// syntax
// array.filter(callback(element, index, arr), thisValue)
// filter method is used to create a new arra from given array consiting of only those elements from satisfy condition.

const filterArry = [15,5,20,1,30,45]
const res1 = filterArry.filter((el) => el >= 10);
console.log(res1);


// 16. reduce()
// the javascript reduce method in javascript is used to reduce the array to a single value and executes a provided 
// function for each value of the array.
// syntax
// array.reduce( function(total, currentValue, currentIndex, arr), initialValue )
const item = [20,10,30,35,40,45,50] 
const res2 = item.reduce((total,currentValue,index,item) => {
    // return total + currentValue
    // return total * currentValue
    // return total - currentValue
    return total % currentValue

});
console.log(res2);


//17. sort()
let numbers = [20, 5.2, -120, 100, 30, 0];
const res3 = numbers.sort((a,b) => a - b);
console.log(res3);

let arr = [2, 5, 8, 1, 4];
console.log(arr.sort((a,b) => {
    return a + 2 * b
}));

console.log(arr);

// 18. reverse()
console.log(numbers.reverse())


// 19. isArray()
// isArray check your variable are array or not. if you have multiple vaiable they check which variable are array.
// your variable are array then return trur othervice return false.
// const a = 10
// const a = [10,20,30,40]
const a = "string"
const res4 = Array.isArray(a)
console.log(res4);


// 20. join()
// the join method create and returns a new string by concatenating all of the elements in an array.
const india = ["I","N","D","I","A"]
console.log(india.join(""));


// 21. inCludes()
// include function check value are exist or not in array. if value are exist then return true othervice false
// there is case-sensitive. exact value match.
const A = ["tejas","rohan","smit","vishva"]
console.log(A.includes("smit"));


// 22. some()
// the javascript some method checks wheater at least one of the elements of the array satisfies the condition checked by the argument.
// condition are match they return true othervice false
// syntax
// arr.some(callback(element,index,array),thisArg)
const B = [1,2,3,4,5,6]
console.log(B.some((data,index) => data > 6 ))


// 23. every()
// the javascript every method check wheater all the elements of the array satisfy the given condition.
// if all elements condition are satisfy then return true othervice false.
const C = [10,15,20,25,30]  // outpur: false
// const C = [100,150,20,25,30] // output: true
const res5 = C.every((data,index) => data >= 18);
console.log(res5);


//24. find()
// fine method is used to get the value of the first element in the array that satisfy the provided condition.
// syntax
// array.find(function(currentValue, index, arr),thisValue);
const D = [11,15,18,20,25];
console.log(D.find((data,index) => data > 18)); // output 20

// 25. findIndex()
// findIndex method is used to get the value of the first element of index in the array that satisfy the provided condition.
const E = [11,15,18,20,25];
console.log(E.findIndex((data,index) => data > 18)) // output 3

// 26 valueOf()
// this method is used for print the element of array or string.
const F = "string"
console.log(F.valueOf());


// 27. fill()
// the fill method fills all the element in array with a static value.
const G = ["A","B","C"]
console.log(G.fill("RAM"));


// 28. entries()
// this method is used to get a new  array that contains the key and value pairs for each index of array.
let languages = ["HTML", "CSS", "JavaScript", "ReactJS"];
let g = languages.entries();
for(x of g){
    console.log(x);
}
// output

// [ 0, 'HTML' ]
// [ 1, 'CSS' ]
// [ 2, 'JavaScript' ]
// [ 3, 'ReactJS' ]