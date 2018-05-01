function reverse(string) {
    let newString = "";
    let i = string.length;
    for (i; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

console.log(reverse("hrant"));

module.exports = {
    reverse
};


