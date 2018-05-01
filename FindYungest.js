let people = [{name: "bob", surname: "splash", age: 18}, {name: "shib", surname: "pluff", age: 1}];

function getAge(arr) {
    let currentEl = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age < currentEl.age){
            currentEl = arr[i];
        }
    }
    return currentEl;
}

console.log(getAge(people));


