const fetch = require('node-fetch');
const fs = require('fs');

const status = (response) => {
  if (response.status !== 200) {
    return Promise.reject(new Error(response.statusText))
  }
  return Promise.resolve(response)
}
const json = (response) => {
  return response.json()
}

const text = (response) => {
  return response.text()
}

fetch('http://nodejs.org/dist/index.json')
  .then(status)
  .then(json)
  .then(function (data) {
     fs.writeFile("data_1.txt", data);
    // console.log('data', data);
  })
    .catch(function (error) {
    console.log('Error', error)
  })

fetch('https://www.google.com/')
  .then(status)
  .then(text)
  .then(function (data) {
     fs.writeFile("data_2.txt", data);
    // console.log('data', data);
  })
    .catch(function (error) {
    console.log('Error', error)
  })

fetch('https://github.com/bitinn/node-fetch')
  .then(status)
  .then(text)
  .then(function (data) {
  fs.writeFile("data_3.txt", data);
    // console.log('data', data);
  })
    .catch(function (error) {
    console.log('Error', error)
  })
