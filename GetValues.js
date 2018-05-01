let obj = {
    country: "collapsed",
    juice: "cold",
};

function getVal(object) {
    let obj = [];
    let a;
    for (let value in object) {
        if (!obj.hasOwnProperty(value)) {
            obj.push(object[value])
        }
    }
    return obj;
}

console.log(getVal(obj))
