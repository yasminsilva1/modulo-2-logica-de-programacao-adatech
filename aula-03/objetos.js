//* Objetos
// chave: valor
// key: value

function soma(valorA, valorB) {
	return valorA + valorB;
}

let pessoa = {
	nome: "Yasmin",
	idade: 21,
	torcida: "Internacional",
	altura: 1.59,
  recebeEmails: true,
	endereco: {
		rua: "Rua X",
		numero: 10,
		complemento: null,
		cidade: "Sapiranga",
		estado: "RS",
	},
	somaTodas: soma(10, 50),
};

// console.log(pessoa);

//* pegar as chaves de um objeto
let chaves = Object.keys(pessoa);
// console.log(chaves);

//* pegar os valores de um objeto
let valores = Object.values(pessoa);
// console.log(valores);

//* cirando um objeto novo a partir do antigo
let pessoa2 = { ...pessoa };
pessoa2.nome = "João";
pessoa2.torcida = "Fluminense";
pessoa2.idade = 25;
pessoa2.endereco.rua = "Rua Nove";
// cria uma nova chave e valor
pessoa2.teste = "Nova chave e valor";
// console.log(pessoa2);

//* percorrer o dicionario do objeto
for (let key in pessoa) {
	// console.log(`Key: ${key}; Value: ${pessoa[key]}`);

	for (let key2 in pessoa.endereco) {
		// console.log(`Key: ${key2}; Value: ${pessoa.endereco[key2]}`);
	}
}

//! console.log(Object.keys(pessoa).length);

//* pegas os pares do objeto e transforma em array
let pares = Object.entries(pessoa);
// console.log(pares);

