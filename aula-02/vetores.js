//* vetor de numero
// posições
//           0, 1, 2,  3, 4
let vetor = [1, 2, 50, 5, 60];
// console.log(vetor);

//* vetor de string
let frutas = [
	"maça", // 0
	"banana", // 1
	"uva", // 2
	"pera", // 3
	"jaca", // 4
	"laranja", // 5
];
// console.log(frutas[3]);

//* vetor misto
let misto = [
	5, // 0
	"Ola", // 1
	true, // 2
	{ nome: "joao", endereco: "rua x" }, // 3
];
// console.log(misto[3]);

//* spread operator
let nums = [1, 2, 3, 4, ...misto];
// console.log(nums);

//* length - qunatidade de itens do array
// console.log(frutas.length);

//* includes() - retorna boolean (true/false)
// console.log(frutas.includes("maça"));

//* indexOf() - retorna a posição
// console.log(frutas.indexOf("uva"));

//* toString() - converto em string
// console.log(frutas.toString());

//* join() - transforma separado por um delimitador
// console.log(frutas.join("; "));

//* sort() - ordena o vetor (alfabática ou numérica)
//* reverse() - inverte o vetor
// console.log(vetor);
// console.log(vetor.sort());
// console.log(vetor.sort().reverse());

frutas = [
	"maça", // 0
	"banana", // 1
	"uva", // 2
	"pera", // 3
	"jaca", // 4
	"laranja", // 5
];

//* splice() - recebe dois parâmetros: o primeiro é a posição de start e o segundo a quantidade de elementos; o splice REMOVE do array original o que foi definido dentro dos parenteses
// frutas.splice(2, 4); // [ 'uva', 'pera', 'jaca', 'laranja' ]
// console.log(frutas); // [ 'maça', 'banana' ]

frutas = [
	"maça", // 0
	"banana", // 1
	"uva", // 2
	"pera", // 3
	"jaca", // 4
	"laranja", // 5
];

//* slice() - recebe dois parâmetros: o primeiro é a posição inicial e o segundo é a posição final; ele cria uma CÓPIA do array original de acordo com o que foi passado nos parâmetros.
// frutas.slice(2, 4); // [ 'uva', 'pera' ]
// console.log(frutas); // [ 'maça', 'banana', 'uva', 'pera', 'jaca', 'laranja' ]

//* push - insere elementos no final do array (LIFO)
// frutas.push("limao");
// console.log(frutas);

//* pop - remove o último elemento do array (FIFO)
// console.log(frutas);
// console.log(frutas.pop());

//* unshift - adiciona no inicio do array
// frutas.unshift("tomate");
// console.log(frutas);

//* shift - remove no inicio do array
// frutas.shift();
// console.log(frutas);