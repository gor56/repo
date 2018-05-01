
function prul(count, obj) {
    if (count === 1){
        return count + " " + obj;
    } else if (count > 1){
        return count + " " + (obj + `'s`);
    }

    return 'invalid input'

}

console.log(prul(9, `gor`));