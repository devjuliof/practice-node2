import fs from "node:fs/promises";

async function openFile() {
  const csvHeaders = "name,quantity,price";
  await fs.writeFile("groceries.csv", csvHeaders);
}

async function addGroceryItem(name, quantity, price) {
  const csvLine = `\n${name},${quantity},${price}`;
  await fs.writeFile("groceries.csv", csvLine, { flag: "a" });
}

(async function () {
  await openFile();
  await addGroceryItem("Ovo", 12, 20);
  await addGroceryItem("Leite", 1, 4.29);
})();
