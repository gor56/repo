let peopel = [{name: "valod", lastname:"dza", age: 28}, {name: "grig", lastname: "pupush", age: 8}];

function sortByAge(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj.hasOwnProperty(arr[i].age)){
            obj[arr[i].age] = [arr[i]]
        } else {
            obj[arr[i].age].push(arr[i])
        }
    }
    return obj;
}

console.log(sortByAge(peopel))

