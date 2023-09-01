// 1. at()
const var1 = [5,10,15,20];
console.log(var1.at(0));    // output : 5
console.log(var1.at(3));    // output : 20
console.log(var1.at(5));    // output : undefined

// 2. pop()
const var2 = [5,10,15,25];
console.log(var2.pop());    // output : 25
console.log(var2);          // output : [5,10,15]


// 3. push()
const newFruites = ["Mango","Apple","Orange","Banana"];
newFruites.push("kiwi")
console.log(newFruites);


// 4. Fill()
const G = ["A","B","C"]
console.log(G.fill("RAM"))


// 5. join()
const india = ["I","N","D","I","A"]
console.log(india.join(""));


// 6. shift()
const brand = ["Peter","Zara","Puma","Nike"]
console.log(brand.shift())      // output : peter
console.log(brand);             // output : [ 'Zara', 'Puma', 'Nike' ]


// 7. unshift()
const brand1 = ["Peter","Zara","Puma","Nike"]
console.log(brand1.unshift("startbuck","Croc"));    // output : [ 'startbuck', 'Croc', 'Peter', 'Zara', 'Puma', 'Nike' ]
console.log(brand1); // output : [ 'startbuck', 'Croc', 'Peter', 'Zara', 'Puma', 'Nike' ]


// 8. reverse()
let numbers = [20, 5.2, -120, 100, 30, 0];
console.log(numbers.reverse())

// 9. inCludes()
const A = ["tejas","rohan","smit","vishva"]
console.log(A.includes("tejas"));   // output : true
console.log(A.includes("Tejas"));   // output : false


// 10. map()
let arr = [2,5,6,3,8,9];

let newArr = arr.map((val,index) => {
    return {key : index,value : val * val}
})
console.log(newArr);


// 11. find()
const arr1 = [5,10,12,15,20,25]
console.log(arr1.find((ele,i) => ele >= 14));   // output : 15


// 12. filter()
const filterArry = [15,5,20,1,30,45]
const res = filterArry.filter((age,i) => age >= 20) 
console.log(res);   //output : [20,30,45]


// 13. every()
const C = [10,15,20,25,30]
console.log(C.every((age,i) => age >= 15)); // output : false
console.log(C.every((age,i) => age >= 5));  // output : true


// 14. findIndex()
const E = [11,15,18,20,25];
console.log(E.findIndex((age,i) => age >= 18));     // output : 2(index)
console.log(E.findIndex((age,i) => age > 18));      // output : 3(index)


// 15. reduce()
const item = [20,10,30,35,40,45,50]
const res2 = item.reduce((total,currentValue,index,item) => {
    // return total + currentValue        // output : 23
    // return total * currentValue        // output : 18900000000
    // return total - currentValue        // output : -190
    return total % currentValue           // output : 0
})
console.log(res2);

// 16. indexOf()
const indexof = ["Abhi","Aaksh","Aman","Sid","Shubham"]
console.log(indexof.indexOf("Aaksh"));  // output : 1
console.log(indexof.indexOf("aaksh"));  // output : -1


function findDuplicate(array){
    return array.reduce((total,currentItem,index,realArray) => {
        if(realArray.indexOf(currentItem) !== index && total.indexOf(currentItem === -1)){
            total.push(currentItem)
        }
        return total
    },[])
}
const arrayItem = [1, 2, 3, 4, 2, 3, 5]
const duplicate = findDuplicate(arrayItem);
console.log(duplicate);