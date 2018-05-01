


function takeAge(day, month, year) {
    let date = new Date;
    /*let xDay = date.getDate();
    let xMonth = date.getMonth() + 1;*/
    let xYear = date.getFullYear();
    return (xYear - year);
}

console.log(takeAge(4, 2, 1971));