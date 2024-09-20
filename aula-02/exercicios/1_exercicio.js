//* 1) Escreva uma função que receba um vetor de números e retorne a soma de todos os elementos.
const somaVetor = (vetor) =>
	vetor.reduce((totalAcumulado, item) => totalAcumulado + item, 0);

const numeros = [2, 10, 5, 20];
const resultadoSomaArray = somaVetor(numeros);
console.log(resultadoSomaArray); // 37
