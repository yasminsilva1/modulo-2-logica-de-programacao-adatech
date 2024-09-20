//* 3) Escreva uma função que solicite dois números do usuário e divida um número pelo outro. Use um bloco try/catch para garantir que a divisão seja segura e trate qualquer exceção que possa ocorrer.
const prompt = require("readline-sync");

const num1 = Number(prompt.question("Digite o primeiro valor: "));
const num2 = Number(prompt.question("Digite o segundo valor: "));

function divisao(num1, num2) {
	try {
		if (!num1 || !num2) {
			throw new Error("Valores não podem ser vazios.");
		}

		if (isNaN(num1) || isNaN(num2)) {
			throw new Error("Os dois valores informados precisam ser numéricos.");
		}

		let resultado = num1 / num2;
		console.log(`${num1} / ${num2} = ${resultado}`);
	} catch (error) {
		console.log(`Erro: ${error.message}`);
	}
}

divisao(num1, num2);
