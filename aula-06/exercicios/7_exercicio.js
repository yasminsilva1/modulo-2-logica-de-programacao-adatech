//7) Dado um array de arrays, encontrar a soma de todos os números contidos nos arrays internos.
// const infoArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const infoArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

for (const array of infoArray) {
  let soma = 0;

  for (const num of array) {
    soma += num;
  }
  console.log(`${array} - soma: ${soma}`);
}