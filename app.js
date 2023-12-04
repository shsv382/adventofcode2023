const fs = require('fs');

let input = [];

fs.readFileSync("input.txt", "utf8").toString().trim().split('\n').map(item => input.push(item.trim()));

function print1(input) {
    console.log(input[0])
}

print1(input)