// binarySearch

function binarySearch(arr,target){
    let leftPonter = 0
    let rightPointer  = arr.length - 1
    while (leftPonter <= rightPointer) {
        let middleware = Math.floor((leftPonter + rightPointer) / 2);

        if(target <= arr[middleware]){
            return middleware
        }else if (target < arr[middleware]){
            rightPointer = middleware - 1
        }else{
            leftPonter = middleware + 1
        }
    }
    return -1
}

console.log(binarySearch([-4,1,2,3,4,6,7,8],-4));