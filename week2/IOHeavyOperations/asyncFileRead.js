const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, content) {
  if (err) {
    console.log(err);
  } else {
    console.log(content);
  }
});

fs.readFile("b.txt", "utf-8", function (err, content) {
  if (err) {
    console.log(err);
  } else {
    console.log(content);
  }
});

fs.readFile("c.txt", "utf-8", function (err, content) {
  if (err) {
    console.log(err);
  } else {
    console.log(content);
  }
});
