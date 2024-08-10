const fs = require("fs");

const content1 = fs.readFileSync("a.txt", "utf-8");
const content2 = fs.readFileSync("b.txt", "utf-8");
const content3 = fs.readFileSync("b.txt");

console.log(content1);
console.log(content2);
console.log(content3);
