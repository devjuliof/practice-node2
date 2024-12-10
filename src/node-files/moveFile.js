import fs from "node:fs/promises";

async function moveFile(source, destination) {
  await fs.rename(source, destination);
  console.log(`moved file from ${source} to ${destination}`);
}

moveFile("greetings-2.txt", "aaa.txt");
