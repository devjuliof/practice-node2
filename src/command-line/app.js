const process = require("process");

process.stdin.on("data", (data) => {
  console.log(`Você digitou: ${data}`);
});

process.stdin.on("end", () => {
  console.log("Fim da entrada.");
});
