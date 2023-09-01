// On the other hand , for-in is used to iterate over the enumeable properties of an object.
// it allows you to access the keys of the object rahter then the values.

// syntax
// for(let x in object){
//     // code blocck
// }

// example

const person = { fname : "jhon",lname : "doe",age : 25}
for(let x in person){
    console.log(x);
}


const numbers = [45,4,9,16,25]
for(let x in numbers){
    console.log(x);
}