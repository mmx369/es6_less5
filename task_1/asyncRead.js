const fs = require('fs');

fs.readFile('index.html', 'utf8', (err, contents_1) => {
    if (err) {
    console.error(err)
    return
  }
  console.log(contents_1)
});

fs.readFile('test_1.txt', 'utf8', (err, contents_2) => {
    if (err) {
    console.error(err)
    return
  }
  console.log(contents_2)
});

fs.readFile('test_2.txt', 'utf8', (err, contents_3) => {
    if (err) {
    console.error(err)
    return
  }
  console.log(contents_3)
});

console.log('1111111');



