//* 4) Use um Map para armazenar informações sobre estudantes (nome, idade, nota) e,
//* em seguida, encontre o aluno com a nota mais alta.
const estudantes = new Map();

estudantes.set(1, { nome: "João", idade: 12, nota: 6 });
estudantes.set(2, { nome: "Maria", idade: 12, nota: 8 });
estudantes.set(3, { nome: "Kaue", idade: 13, nota: 10 });
estudantes.set(4, { nome: "Julia", idade: 12, nota: 10 });
estudantes.set(5, { nome: "Matheus", idade: 13, nota: 9 });

let nomeAlunoMaiorNota = [];
let maiorNota = 0;

estudantes.forEach((valor) => {
	if (valor.nota > maiorNota) {
		maiorNota = valor.nota;
		nomeAlunoMaiorNota = [valor.nome];
	} else if (valor.nota === maiorNota) {
		nomeAlunoMaiorNota.push(valor.nome);
	}
});

if (nomeAlunoMaiorNota.length === 1) {
	console.log(`Maior nota: ${maiorNota}; Aluno com a maior nota: ${nomeAlunoMaiorNota}.`);
} else {
	console.log(`Maior nota: ${maiorNota}; Alunos com as maiores notas: ${nomeAlunoMaiorNota.join(", ")}.`);
}