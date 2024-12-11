const path = require("path");

const isAbsolute = path.isAbsolute("src/text.js");

console.log(isAbsolute);

if (isAbsolute) {
  console.log("é absoluto");
}

if (!isAbsolute) {
  console.log("não é absoluto");
}
