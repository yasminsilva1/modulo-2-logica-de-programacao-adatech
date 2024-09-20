//* 2) Escreva uma função que encontre o valor máximo em um vetor de números.
const valorMaximo = (vetorNumerico) => Math.max(...vetorNumerico);

const valores = [10, 32, 100, 23, -2, 51, 33, 0, 18, 1, 11];
const maiorValor = valorMaximo(valores);
console.log(maiorValor); // 100
