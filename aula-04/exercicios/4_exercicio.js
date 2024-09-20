//* 4) Validação de Login:
//* Crie um formulário de login que solicite ao usuário um nome de usuário e uma senha. Use estruturas if-else para verificar se as credenciais inseridas estão corretas ou não.
const prompt = require("readline-sync");

const cadastroNomeUsuario = prompt.question("Cadastre o seu nome de usuario: ");
const cadastroSenha = prompt.question("Cadastre a sua senha: ");

if (!cadastroNomeUsuario || !cadastroSenha) {
	console.log("⛔ Erro: preencha todos os campos.");
} else {
	console.log("✅ Cadastro concluído.");

	const loginUsuario = prompt.question("Digite seu nome de usuario: ");
	const loginSenha = prompt.question("Digite sua senha: ");

	if (loginUsuario === cadastroNomeUsuario && loginSenha === cadastroSenha) {
		console.log("✅ Login efetuado com sucesso!");
	} else {
		console.log("⛔ Erro: nome de usuário ou senha inválidos.");
	}
}






// const dadosUsuario = { nomeUsuario: cadastroNomeUsuario, senha: cadastroSenha };
// console.log(dadosUsuario);

// if (
// 	dadosUsuario.nomeUsuario === loginUsuario &&
// 	dadosUsuario.senha === loginSenha
// ) {
// 	console.log("✅ Login efetuado com sucesso!");
// } else {
// 	console.log("⛔ Erro: nome de usuário ou senha inválidos.");
// }
