const path = require("path");

const newPath = path.format({
  root: "/",
  dir: "/src/pathmodule",
  base: "format.js",
});

console.log(newPath);
