function delValue(a, value) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === value){
            let del = a.indexOf(value);
            a.splice(del, 1);
        }
    }
    return a;

}
let arr = [0, 1, 2, 1, 3];

console.log(delValue(arr, 1));