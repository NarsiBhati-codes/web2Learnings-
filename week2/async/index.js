const fs = require("fs");

function cleanFile(fileName) {
  return new Promise(function (resolve) {
    fs.readFile(fileName, "utf-8", function (err, data) {
      data = data.trim();
      fs.writeFile(fileName, data, resolve);
    });
  });
}

cleanFile("a.txt").then(function () {
  console.log("work done by Promise");
});
