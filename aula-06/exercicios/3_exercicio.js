//* 3)Escreva um programa que, dada uma string, conte o número de vogais nela.
function contaVogais(str) {
	if (typeof str !== "string") return 0;
	const vogais = "aeiouAEIOU";

	let count = 0;

	for (let char of str) {
		if (vogais.includes(char)) count++;
	}

	return count;
}

const string = "Frase de teste";
const quantidadeVogal = contaVogais(string);
console.log(quantidadeVogal);
