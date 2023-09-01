// 1. Find the missing number in a given integer array of 1 to 100

// Return: integer — the missing number in the array

let arr = [1,2,3,4,5,6,7,8,10];

const findMissingNum = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] + 1 !== arr[i + 1]){
            return arr[i] + 1
        }
    }
    return false
}

console.log(findMissingNum(arr));   // output : 9


// 2. Find a duplicate number in an array of integers

// Return: integer — the duplicate number
const arr1 = [1,2,3,4,5,6,7,7,8,6,10];
// try 1
const findDuplicate = (arr1) => {
    const observed = {};
    for (let i = 0; i < arr1.length; i++) {
        if(observed[arr1[i]]){
            return arr1[i]
        }else{
            observed[arr1[i]] = arr1[i]
        }
    }
}

console.log(findDuplicate(arr1));   // output : 7

// try2
const arry = [1, 2, 1, 3, 4, 3, 5];

const toFindDuplicates = (array) => {
    return array.filter((item,index) =>  array.indexOf(item) !== index)
}
const duplicateElementa = toFindDuplicates(arry);
console.log(duplicateElementa); // output : [1,3]

// try3
// Using the has() method

function toFindDuplicate(array){
    const uniqueElement = new Set(array)

    const filterElements = array.filter(item => {
        if(uniqueElement.has(item)){
            uniqueElement.delete(item)
        }else{
            return item
        }
    });
    return [...new Set(filterElements)]
}

const duplicate = toFindDuplicate(arry)
console.log(duplicate);     // output : [1,3]




// 3. Find the largest and smallest number in an unsorted array of integers
// Return: object — containing value of min and max

const arr2 = [1, 2, 3, 4, 100];

const findMaxMin = (array1) => {
    let max = array1[0]
    let min = array1[0]

    for (let i = 0; i < array1.length; i++) {
        const element = array1[i];
        if(element > max){
            max = element
        }else if(element < min){
            min = element
        }
    }

    return {
        "max" : max,
        "min" : min
    };
}

console.log(findMaxMin(arr2)); // output : { "max": 100, "min": 1 }


// 4. Return an array showing the cumulative sum at each index of an array of integers.

let arr4 = [1,3,5,7];

const cumulativeSum = (list) => {
    let result = [list[0]]

    for (let i = 1; i < list.length; i++) {
        result.push(list[i] + result[i - 1])
    }   
    return result
}


console.log(cumulativeSum(arr4));       // output : [1,4,9,16]




// 5. Find all duplicate numbers in an array with multiple duplicates.

const arr5 = [1,1,2,3,4,5,6,7,8,6,6,7,7,7,10,10];

const returnMultipleDupesArray = (arr5) => {
    let observed = {}
    let dupsArray = []

    for (let i = 0; i < arr5.length; i++) {
        const element = arr5[i];
        console.log(observed[arr5[i]]);

        if(observed[arr5[i]]){
            if(observed[arr5[i]] === 1){
                dupsArray.push(arr5[i])
            }
            observed[arr5[i]] = observed[arr5[i]] + 1
        }else{
            observed[arr5[i]] = 1
        }
    }
    return dupsArray
}

console.log(returnMultipleDupesArray(arr5));



// 6. Remove all duplicates from an array of integers.

const removeDupes = (arr6) => {
    let result = [];
    let previous = arr6[0];
    console.log(previous);
    result[0] = previous
    console.log(result);

    for (let i = 0; i < arr6.length; i++) {
        const element = arr6[i];
        console.log("pre..",previous);
        if(arr6[i] !== previous){
            result.push(arr6[i])
        }
        previous = arr6[i]
    }
    return result
}
const arr6 = [2, 2, 4, 1, 1, 1, 1, 1, 1, 4, 3];
console.log(removeDupes(arr6));     // output : [ 2, 4, 1, 4, 3 ]