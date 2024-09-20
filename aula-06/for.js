//* for, for ... in, for ... of

//* FOR - for tem controle preciso do inicio ao fim da iteração - condição, incremento e iteração.
//* é um laço tradicional, como indexes de array.
for (let i = 0; i <= 5; i++) {
	// console.log(i);
}

//* FOR ... IN - itera as propriedades enumaraveis de um objeto
//* é util para acessar as chaves e valores do objeto
const obj = {
	a: 1,
	b: 2,
	c: 3,
};

for (const key in obj) {
	// console.log(`Chave: ${key}, valor: ${obj[key]}`);
}

//* FOR ... OF - iterar sobre os valores dos arrays
const array = ["leao", "cachorro", "gato", "pato", "elefante"];

for (const item of array) {
	// console.log(item);
}

//* new Set() - transforma um array em obj com apenas valores
const meuArray = new Set([1, 1, 2, 2, 3, 4, 5]);
console.log(meuArray); // { 1, 2, 3, 4, 5 }

for (const value of meuArray) {
	// console.log(value);
}
