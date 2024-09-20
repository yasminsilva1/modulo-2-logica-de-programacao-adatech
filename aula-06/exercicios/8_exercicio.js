// 8) Escreva um loop para calcular o fatorial de um número fornecido.

function calcFatorial(numero) {
	let fatorial = 1;
	for (let i = 1; i <= numero; i++) {
		fatorial *= i;
	}
	return fatorial;
}

let numero = 5;
console.log(calcFatorial(numero));
