//* 2) Calculadora de IMC:
//* Crie uma calculadora de índice de massa corporal (IMC) que peça ao usuário
//* para inserir seu peso e altura.
//* Em seguida, use um bloco if-else para exibir uma mensagem que classifica a
//* condição do usuário com base no IMC calculado.
const prompt = require("readline-sync");

const peso = prompt.questionFloat("Digite seu peso: ");
const altura = prompt.questionFloat("Digite sua altura: ");

const imc = peso / altura ** 2;
const imcFormatado = imc.toFixed(2).replace(".", ",");

/*
- Abaixo de 18,5: Abaixo do peso
- 18,5 a 24,9: Peso normal
- 25,0 a 29,9: Sobrepeso
- 30,0 a 34,9: Obesidade grau 1
- 35,0 a 39,9: Obesidade grau 2
- 40,0 ou mais: Obesidade grau 3 (obesidade mórbida)
*/

if (imc < 18.5) {
	console.log(`${imcFormatado} - Abaixo do peso.`);
} else if (imc <= 24.9) {
	console.log(`${imcFormatado} - Peso normal.`);
} else if (imc <= 29.9) {
	console.log(`${imcFormatado} - Sobrepeso.`);
} else if (imc <= 34.9) {
	console.log(`${imcFormatado} - Obesidade Grau 1`);
} else if (imc <= 39.9) {
	console.log(`${imcFormatado} - Obesidade Grau 2`);
} else {
	console.log(`${imcFormatado} - Obesidade grau 3 (obesidade mórbida)`);
}
