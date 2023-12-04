const fs = require('fs');

let input = [];

fs.readFileSync("input.txt", "utf8").toString().trim().split('\n').map(item => input.push(item.trim()));

function getSum(input) {
    let result = 0;
    input.map((item) => {
        let tens = 0;
        let units = 0;
        for (let i=0; i<item.length; i++) {
            if (item.charCodeAt(i) >= 48 && item.charCodeAt(i) <= 57) {
                tens = parseInt(item[i]) * 10;
                break;
            }
        }
        for (let j=item.length-1; j>=0; j--) {
            if (item.charCodeAt(j) >= 48 && item.charCodeAt(j) <= 57) {
                units = parseInt(item[j]);
                break;
            }
        }
        result += tens + units;
    })
    return result
}

console.log(getSum(input))