function mixPeople(str1, str2) {
    let srch = str1.indexOf(" ");
    let srch1 = str2.indexOf(" ");

    let newStr = str1.slice(srch + 1, str1.length);
    let newStr1 = str2.slice(srch1 + 1, str2.length);

  return [str1.replace(newStr, newStr1), str2.replace(newStr1, newStr)];
}

console.log(mixPeople("darth vader", "aniken skywalker"))