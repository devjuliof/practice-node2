const path = require("path");

const from = "/src/node-files/deleteFile.js";
const to = "/src/pathmodule/relative.js";

const relativePath = path.relative(from, to);
console.log(relativePath);
