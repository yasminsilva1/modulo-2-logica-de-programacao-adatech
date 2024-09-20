//* 1)  Maior de Três Números:
//* Peça ao usuário para inserir três números e use estruturas condicionais
//* if e else para determinar qual deles é o maior.
const prompt = require("readline-sync");

const num1 = prompt.questionFloat("Digite o primeiro numero: ");
const num2 = prompt.questionFloat("Digite o segundo numero: ");
const num3 = prompt.questionFloat("Digite o terceiro numero: ");

if (num1 === num2 && num1 === num3) {
	console.log("Todos os números são iguais.");
} else if (num1 >= num2 && num1 >= num3) {
	console.log(`O número ${num1} é maior.`);
} else if (num2 >= num3) {
	console.log(`O número ${num2} é maior.`);
} else {
	console.log(`O número ${num3} é maior.`);
}
