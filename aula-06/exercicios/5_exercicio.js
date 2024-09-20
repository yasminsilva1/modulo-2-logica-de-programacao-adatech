//* 5) Crie um array de objetos, onde cada objeto representa um aluno com propriedades como nome e notas (um array de notas).
//* Use um laço for...of para iterar sobre o array de alunos e, para cada aluno, use um laço for para calcular a média de suas notas.
//* Exiba o nome do aluno e sua média no console.
const alunos = [
	{ nome: "João", notas: [6, 0, 10] },
	{ nome: "Maria", notas: [10, 4, 6] },
	{ nome: "Pedro", notas: [6, 10, 9] },
];

console.time();

for (const aluno of alunos) {
	let soma = 0;

	for (let i = 0; i < alunos.length; i++) {
		soma += aluno.notas[i];
	}

	const media = soma / aluno.notas.length;

	console.log(`Aluno: ${aluno.nome}, Média: ${media.toFixed(2)}`);
}

console.timeEnd();
