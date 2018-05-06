let a = [2000, 8, 3, 9, 5, 10];


function sort(arr) {
    for (let i = 0; i < arr.length - 1; i ++){
        let current = arr[0];
        for (let j = 0; j < arr.length - 1; j++){
            if (current >= arr[j + 1]){
                arr[j] = arr[j + 1];
                arr[j + 1] = current;
            }
            else {
                current = arr[j + 1];
            }
        }
    }
    return arr;
}

console.log(sort(a))