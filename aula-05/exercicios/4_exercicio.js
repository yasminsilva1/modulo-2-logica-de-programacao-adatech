//* 4) Escreva um loop do...while que peça ao usuário para digitar a senha "12345" e continue pedindo até que a senha correta seja inserida.
const prompt = require("readline-sync");

let senhaCorreta = 1234;
let interromperLoop = true;

do {
	const senha = Number(prompt.question("Digite a senha correta: "));

	if (senha === senhaCorreta) {
		console.log("Senha correta.");
		interromperLoop = true;
	} else {
		console.log("Senha errada.");
    interromperLoop = false;
	}
} while (!interromperLoop);
