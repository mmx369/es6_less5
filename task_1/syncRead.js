const fs = require('fs');

const contents_1 = fs.readFileSync('index.html', 'utf8');
console.log(contents_1);

const contents_2 = fs.readFileSync('test_2.txt', 'utf8');
console.log(contents_2);

const contents_3 = fs.readFileSync('test_1.txt', 'utf8');

