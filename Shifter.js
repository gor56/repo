let some = {arwen: "elv", gendalf: "mage", hobbit:"bilbo"};

function shifter(object) {
    let obj = {};
    for (let key in object) {
        if (!obj.hasOwnProperty(key)) {
            let newKeyNamme = object[key]

            obj[newKeyNamme] = key
        }
    }
    return obj;
}

console.log(JSON.stringify(some))
console.log()
console.log('after: ', shifter(some))

