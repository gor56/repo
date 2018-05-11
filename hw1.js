const fs = require('fs');
const p = require('promise');
let rF;
let wr;
let strin = "great gatsby can take alll your troubles";

let readfile = new Promise(function (resolve, reject) {
    wr = fs.writeFile('./a', strin, 'utf8', function (error, data) {
        if (error) {
            error = new Error('he cant');
            throw reject(error);
        }
        else {
            resolve(data);
        }
        rF = fs.readFile('./a', 'utf8', function (error, data) {
            //երբ ստեղ ռեջէքթ չեմ դնում լիքը էռոռներա տալիս
            //սենց պռոստը անդիֆայնեդ
            return new Promise(function (resolve) {
                if (error) {
                    error = new Error('pff')
                }
                else {
                    resolve(data);
                }
            })
        })
    })
});


let a = function () {
    readfile
        .then(wr)
        .then(rF)
        .catch(wr)

};

console.log(a());
