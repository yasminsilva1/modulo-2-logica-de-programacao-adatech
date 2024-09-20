//* 5) Crie um array associativo que associe nomes de produtos a objetos que
//* contenham informações sobre o produto (por exemplo, nome, preço, descrição).
const listaPordutos = [];

listaPordutos["Mouse"] = {
	nome: "Mouse",
	preco: 99.99,
	descricao:
		"Ideal para trabalho e jogos, com design elegante e fácil conectividade.",
};

listaPordutos["Teclado"] = {
	nome: "Teclado",
	preco: 149.99,
	descricao: "Teclado mecânico com iluminação RGB e teclas programáveis.",
};

listaPordutos["Monitor"] = {
	nome: "Monitor",
	preco: 2500,
	descricao: "Monitor Full HD de 24 polegadas.",
};

console.log(listaPordutos);
console.log(listaPordutos["Monitor"]);
console.log(listaPordutos["Monitor"].preco);
