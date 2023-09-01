// linearSearch 



function linearSearch(n){
    let arra = [-4,-3,-2,-1,0,1,2,5,7,10,14]

    //try 1
    for (let i = 0; i < arra.length; i++) {
        const element = arra[i];
        if(element === n){
            return i
        }
    }
    return -1        
}

// console.log(linearSearch(1)); // output : 5
// console.log(linearSearch(-4)); // output : 0
// console.log(linearSearch(14)); // output : 10
// console.log(linearSearch(16)); // output : -1


function linerSearch2(n){
    let arra = [-4,-3,-2,-1,0,1,2,5,7,10,14]
    //try 2
    for(let x in arra){
        if(arra[x] === n){
            return x
        }
    }
    return -1
}

console.log(linerSearch2(2));   // output : 2
console.log(linerSearch2(-3));   // output : 1
console.log(linerSearch2(-33));   // output : -1



