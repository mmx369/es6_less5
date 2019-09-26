const request = require("request");

function getUrl(url) {
  return new Promise(
    (resolve, reject) => {
      request.get(url, (error, res, body) => {
        if (error) {
          reject(new Error(error));
        } else {
          resolve(body);
        }
      });
    });
}

getUrl('http://nodejs.org/dist/index.json')
.then((value) => {
  console.log(value);
})
.catch((reason) => {
  console.error(reason);
});
