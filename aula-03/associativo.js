//* Array Associativo
//* é uma estrutura de dados que associa valores e chaves ou indices

var pessoa = [];
pessoa["nome"] = "Yasmin";
pessoa["idade"] = 21;
// console.log(pessoa);
// console.log(pessoa["nome"]);
// console.log(pessoa["idade"]);

const sinonimos = {
	feliz: ["algre", "contente", "radiante"],
	triste: ["melancolico", "abatido", "deprimido"],
	rapido: ["eficiente", "agil", "veloz"],
};
// console.log(sinonimos);
// console.log(sinonimos.feliz[1]);
// console.log(sinonimos.triste[2]);

//* New Map()
//* Permite mapear as chaves para valores de forma mais flexivel

const mapa = new Map();

// mapa.set("feliz", sinonimos.feliz);
// mapa.set("triste", sinonimos.triste);
// mapa.set("frio", "gelado");
// mapa.set("rapido", ["eficiente", "agil", "veloz"]);
// console.log(mapa);

//* insere / atualiza a chave
mapa.set(1, { nome: "Alice", idade: 10 });
mapa.set(10, { nome: "Bob", idade: 15 });
mapa.set(5, { nome: "Yasmin", idade: 21 });
mapa.set(4, { nome: "João", idade: 51 });
// console.log(mapa);

mapa.forEach((valor, chave) => {
	// console.log(`Chave: ${chave}; Valor: ${valor.nome}, ${valor.idade}`);
});

//* transforma em array
let arrayDePares = [...mapa];
// console.log(arrayDePares)

//* apaga a chave
mapa.delete("feliz");
// console.log(mapa);

//* acessa o mapa pela chave
let resposta = mapa.get(2);
// console.log(`Usuário número do ID 2: nome: ${resposta.nome}, idade: ${resposta.idade}`);

//* verifica se existe a chave
// console.log(mapa.has("triste"));
