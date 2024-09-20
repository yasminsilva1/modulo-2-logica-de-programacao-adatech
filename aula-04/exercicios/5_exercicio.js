//* 5) Verificação de numero par ou impar:
//* Solicite ao usuário para inserir um número e use uma estrutura if-else para
//* determinar se o número é par ou ímpar.
const prompt = require("readline-sync");

const num = prompt.questionFloat("Digite um numero: ");

if (num % 2 === 0) {
	console.log(`O número ${num} é par.`);
} else {
	console.log(`O número ${num} é ímpar.`);
}