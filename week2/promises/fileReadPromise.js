const { rejects } = require("assert");
const fs = require("fs");

function fileReadPromise() {
  return new Promise(function (resolve, rejects) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      if (!err) {
        resolve(data);
      } else {
        rejects(err);
      }
    });
  });
}

const output = fileReadPromise();

output.then(function (data) {
  console.log(data);
});

output.catch(function (err) {
  console.log(err);
});
