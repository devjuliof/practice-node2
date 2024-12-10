import fs from "node:fs/promises";

async function deleteFile(filepath) {
  await fs.unlink(filepath);
  console.log(`${filepath} was deleted`);
}

deleteFile("groceries.csv");
