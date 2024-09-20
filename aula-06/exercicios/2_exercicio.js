//* 2)Crie uma função que calcule a média de um array de números.
function mediaArray(numeros) {
	let soma = 0;

	for (const num of numeros) {
		soma += num;
	}
	const media = soma / numeros.length;
	
	return media.toFixed(2).replace(".", ",");
}

const array = [2, 5, 7, 3, 8, 9];
const resultadoMedia = mediaArray(array);
console.log(resultadoMedia);
