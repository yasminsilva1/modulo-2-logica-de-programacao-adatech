//* 2) Use um Map para armazenar informações sobre produtos (nome do produto e preço) e, em seguida,
//* imprima todos os produtos e seus preços.
const produtos = new Map();

produtos.set(1, { nomeProduto: "Mouse", preco: 99.99 });
produtos.set(2, { nomeProduto: "Teclado", preco: 149.99 });
produtos.set(3, { nomeProduto: "Monitor", preco: 2500 });

produtos.forEach((valor) => {
	console.log(`${valor.nomeProduto} - R$${valor.preco.toFixed(2).replace(".", ",")} reais.`);
});
