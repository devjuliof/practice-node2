process.stdin.setEncoding("utf8");
process.stdin.resume();
console.log("digite algo");

let nome;

const exibirEntrada = (data) => {
  console.clear();
  nome = data;
  console.log("escreva seu nome");
  console.log(`Voce escreveu ${nome}`);
  process.stdin.once("data", (data) => {
    console.log("escreva sua idade");
    console.log("esse é sua idade" + data);
    process.exit();
  });
};

process.stdin.once("data", exibirEntrada);
