//* MÉTODOS DE ARRAY

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//* FILTER(): é usado para filttrar dados do array.
// Ele não modifica o array original!
// No exemplo abaixo, o filter retorna um novo array somente com os itens pares.
const pares = arr.filter((item) => {
	if (item % 2 == 0) {
		return item;
	}
});
// console.log(pares); // [ 2, 4, 6, 8, 10 ]

//* MAP() - retorna um array que OBRIGATORIAMENTE tem o mesmo tamanho que o original.
// Ele não modifica o array original!
// É usado para modificar os dados de dentro do array ou adicionar dados.
// No exemplo abaixo, quando o item for par, o item será multiplicado por 2 e o restante dos itens serão mantidos iguais.
const impares = arr.map((item) => {
	if (item % 2 == 0) {
		return item * 2;
	} else {
		return item;
	}
});
// console.log(impares); // [1, 4, 3, 8, 5, 12, 7, 16, 9, 20]

//* MAP() com SPREED OPERATOR
const alunos = [
	{ nome: "Yasmin", idade: 21 },
	{ nome: "Lidor", idade: 21 },
	{ nome: "Wesley", idade: 28 },
];

const formados = alunos.map((item) => {
	return { ...item, formado: true };
});
// console.log(formados);
/*
[
  { nome: 'Yasmin', idade: 21, formado: true },
  { nome: 'Lidor', idade: 21, formado: true },
  { nome: 'Wesley', idade: 28, formado: true }
]
*/

//* SORT() - ordena o array
//* Crescente (a - b): Coloca elementos menores antes dos maiores.
//* Decrescente (b - a): Coloca elementos maiores antes dos menores.
const array = [20, 43, 69, 10, 1, 5, 18];
const arrayCrescente = array.sort((a, b) => a - b);
// console.log(arrayCrescente); // [1,  5, 10, 18, 20, 43, 69]
const arrayDecrescente = array.sort((a, b) => b - a);
// console.log(arrayDecrescente); // [69, 43, 20, 18, 10, 5, 1]

//* REDUCE()
const somaVetor = (vetor) =>
	vetor.reduce((totalAcumulado, item) => totalAcumulado + item, 0);

const nums = [1, 2, 3, 4, 5];
const resultadoSomaVetor = somaVetor(nums);
// console.log(resultadoSomaVetor); // 15

const frutas = ["Maçã", "Banana"];

//* FOREACH()
frutas.forEach((value, index) => {
	// console.log(`O índice ${index} é ${value}`);
});
/*
O índice 0 é Maçã
O índice 1 é Banana
*/

//* ADICONA ELEMENTOS NO ARRAY
//* PUSH() - adiciona elemento no final do array
frutas.push("Tomate", "Pitanga");
// console.log(frutas); // [ 'Maçã', 'Banana', 'Tomate', 'Pitanga' ]

//* UNSHIFT() - adiciona elemento no inicio do array
frutas.unshift("Jabuticaba");
// console.log(frutas); // ['Jabuticaba', 'Maçã', 'Banana', 'Tomate', 'Pitanga']

//* DELETA ELEMENTOS DO ARRAY
//* POP() - deleta elementos do final do array
frutas.pop(); // 'Pitanga'
// console.log(frutas); // [ 'Jabuticaba', 'Maçã', 'Banana', 'Tomate' ]

//* SHIFT() - deleta elementos no inicio do array
frutas.shift(); // 'Jabuticaba'
// console.log(frutas); // [ 'Maçã', 'Banana', 'Tomate' ]

const frase = "Frase de exemplo para o uso do método de array split.";

//* SPLIT() - transforma uma string em um array usando um separador que é passado por parâmetro
const arrayFrase = frase.split(" ");
// console.log(arrayFrase); //['Frase', 'de', 'exemplo', 'para', 'o', 'uso', 'do', 'método', 'de', 'array', 'split.']

//* JOIN() - junta os elementos de um array em uma string usando um separador que é passado por parâmetro
// O separador padrão usado para juntar os elementos é a vírgula
const arrayFraseParaString = arrayFrase.join(" ");
// console.log(arrayFraseParaString); // Frase de exemplo para o uso do método de array split.

//* REVERSE() - inverte o array
const arrayInvertido = arr.reverse();
// console.log(arrayInvertido); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

//* INCLUDES() - retorna um valor booleando se o que for passado por parâmetro for encontrado dentro do array
// console.log(frutas.includes("Banana")); // true
// console.log(arrayFrase.includes("HOJE")); // false
