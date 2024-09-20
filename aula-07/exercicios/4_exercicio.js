//4) Validação de E-mail: Crie uma função que verifique se um e-mail é válido.
//Use um bloco try/catch para capturar exceções relacionadas à validação do e-mail.
function validarEmail(email) {
	try {
		if (!email) {
			throw new Error("O campo de e-mail está vazio.");
		}

		const partesDoEmail = email.split("@");
		if (partesDoEmail.length !== 2 || !partesDoEmail[0] || !partesDoEmail[1]) {
			throw new Error("E-mail incompleto.");
		}

		const dominioEmail = partesDoEmail[1].includes(".com");
		if (!dominioEmail) {
			throw new Error("Domínio do e-mail incorreto.");
		}

    console.log("E-mail válido!");
	} catch (error) {
		console.log(`Erro: ${error.message}`);
	}
}

const email1 = "yasmin@gmail.com";
validarEmail(email1);

const email2 = "yasmin.com";
validarEmail(email2);

const email3 = "yasmin@gmail";
validarEmail(email3);

const email4 = "";
validarEmail(email4);