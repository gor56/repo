function MyArray(args){
    this.args = args;
}

MyArray.prototype.create = function () {
    return arguments;
}


let a = new MyArray()
console.log(a.create(1,2,3))