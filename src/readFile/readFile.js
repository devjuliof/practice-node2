import fs from "node:fs";

fs.readFile("./file.json", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(JSON.parse(data.toString()));
});
