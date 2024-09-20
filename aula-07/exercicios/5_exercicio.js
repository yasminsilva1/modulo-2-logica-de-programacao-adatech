//5) Crie uma função que tente converter uma string em um número.
//Use um bloco try/catch para tratar erros de conversão.
const prompt = require("readline-sync");
const valor = prompt.question(
	"Digite um valor para ser convertido em numero: "
);

console.log(`${typeof valor}: ${valor}`);
stringToNumber(valor);

function stringToNumber(valor) {
	try {
		if (!valor) {
			throw new Error("Você precisa inserir algum valor.");
		}

		if (isNaN(valor)) {
			throw new Error(
				"Caracteres alfabéticos não podem ser convertidos para números."
			);
		}

		const valorConvertido = Number(valor);
		console.log(valorConvertido);
	} catch (error) {
		console.log(`Erro: ${error.message}`);
	}
}
