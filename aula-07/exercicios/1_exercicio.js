//* 1) Implemente uma função encadeamentoFuncoes que aceita um número como entrada e encadeia as seguintes operações: dobrar, subtrair 5 e então elevar ao quadrado.
//* A função deve retornar o resultado final.

function encadeamentoFuncoes(num) {
	const resultado = [num]
		.map((valor) => valor * 2)
		.map((valor) => valor - 5)
		.map((valor) => valor ** 2);

  return resultado[0];
}

console.log(encadeamentoFuncoes(10)); // 225
