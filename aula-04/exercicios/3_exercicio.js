//* 3) Conversão de Temperatura:
//* Peça ao usuário para inserir uma temperatura em graus Celsius e use uma
//* instrução if-else para converter essa temperatura para Fahrenheit ou vice-versa,
//* com base na escolha do usuário.
const prompt = require("readline-sync");

const celsiusParaFahrenheit = (temp) => temp * (9 / 5) + 32;
const fahrenheitParaCelsius = (temp) => (temp - 32) * (5 / 9);

console.log(`
  1 - Celsius
  2 - Fahrenheit
`);

const tipoDeEscala = prompt.questionInt("Escolha em qual tipo de escala voce gostaria de inserir a temperatura: ");

if (tipoDeEscala === 1) {
	console.log("Você escolheu inserir temperatura em Celsius. Vamos converter para Fahrenheit!");

	const temperaturaCelsius = prompt.questionInt("Digite uma temperatura em Celsius: ");
	const resultadoFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);

	console.log(`A temperatura ${temperaturaCelsius}ºC convertida para Fahrenheit é: ${resultadoFahrenheit}ºF`);
} else if (tipoDeEscala === 2) {
	console.log("Você escolheu inserir temperatura em Fahrenheit. Vamos converter para Celsius!");

	const temperaturaFahrenheit = prompt.questionInt("Digite uma temperatura em Fahrenheit: ");
	const resultadoCelsius = fahrenheitParaCelsius(temperaturaFahrenheit);
	
	console.log(`A temperatura ${temperaturaFahrenheit}ºF convertida para Celsius é: ${resultadoCelsius}ºC`);
} else {
	console.log("Valor Inválido.");
}