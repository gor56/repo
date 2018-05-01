let a = [1,2,3,4];
let b = [1,2,3,4];

function esEqual(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false;
    }

    let length = arr1.length;

    for(let i = 0 ; i < length ; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}

console.log(esEqual(a,b));