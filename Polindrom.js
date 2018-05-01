const reverse = require("./Annagram").reverse;

function isPolindrome(string) {
    return reverse(string) === string;
}

console.log(isPolindrome("gor"));