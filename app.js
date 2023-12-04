const fs = require('fs');

let input = [];

fs.readFileSync("input.txt", "utf8").toString().trim().split('\n').map(item => input.push(item.trim()));

const dict = [null, "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function modifyInput(input) {
    let newInput = input.map(item => {
        dict.forEach((num, i) => {
            if (num) item = item.split(num).join(i)
        })
        return item
    })
    return newInput
}

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
        console.log(tens + units)
        result += tens + units;
    })
    return result
}

// console.log(getSum(modifyInput(input)))
console.log(modifyInput(["eightwothree"]))
