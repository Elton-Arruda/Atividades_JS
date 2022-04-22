var nome = prompt("Qual o seu nome?");
var idade = prompt("Quantos anos você tem?");
var linguagem = prompt("Qual linguagem de programação você está estudando?");
var msg = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"!`;

alert(msg);

var gosta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 - SIM ou 2 - NÃO`);
if (gosta == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
if (gosta == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}