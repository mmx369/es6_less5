const fetch = require('node-fetch');
const fs = require('fs');

const toText = (response) => {
  return response.text()
}

let promise_1 = fetch('http://nodejs.org/dist/index.json').then(toText);
let promise_2 = fetch('https://github.com/bitinn/node-fetch').then(toText);
let promise_3 = fetch ('https://lenta.ru/').then(toText);


Promise.all([promise_1, promise_2, promise_3])

.then (values => {fs.writeFile("nodejs.txt", values[0]);
 fs.writeFile("github_2.txt", values[1]);
 fs.writeFile("lenta.txt", values[2]);}
 )
.catch(err => {
  console.log(err);
})
