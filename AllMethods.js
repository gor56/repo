

function getMethogs(object) {
    let values = []

    Object.getOwnPropertyNames(object.prototype).forEach((key) => {
        if( typeof object.prototype[key] === 'function'){
            values.push(key)
        }

    })
    return values;
}
console.log(getMethogs(Object));


let a = 'string'

let b = `aastring Aaaa   Aaaa `


console.log(b.repeat('Aaaa'))