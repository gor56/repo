function creator(args){
  let o = {};
  let arr = [];
  for (let v in arguments) {
      arr.push(arguments[v]);
  }
  for (let a in arr){
      if (!o.hasOwnProperty(a)){
          o[arr[a]] = arr[a]
      }
  }
  return o;
}

console.log(creator("lil dicky", "mc globe", 1))