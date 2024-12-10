import fs from "node:fs/promises";

async function readFile(filePath) {
  const data = await fs.readFile(filePath);
  console.log(data.toString());
}

readFile("greetings.txt");
