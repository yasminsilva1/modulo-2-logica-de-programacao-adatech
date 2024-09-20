function soma(valorA, valorB) {
	const resultado = valorA + valorB;
	return resultado;
}

let numero1 = 50;
let numero2 = 40;
let somaTotal = soma(numero1, numero2);
// console.log(somaTotal); // 90

const subtracao = function (valorA, valorB) {
	const resultado = valorA - valorB;
	return resultado;
};

let resultadoSub = subtracao(10, 5);
// console.log(resultadoSub); // 5

const dividir = (valorA, valorB) => valorA / valorB;

const multiplicar = (valorA, valorB) => {
	const resultado = valorA * valorB;
	return resultado;
};

let numero4 = 50;
let numero5 = 40;

let resultadoDiv = dividir(numero4, numero5);
// console.log(resultadoDiv);

let resultadoMulti = multiplicar(numero4, numero5);
// console.log(resultadoMulti);

const curry = (a) => {
	console.log(`Valor A: ${a}`);
	return (b) => {
		console.log(`Valor B: ${b}`);
		return (c) => {
			console.log(`Valor C: ${c}`);
			return a + b + c;
		};
	};
};

let total = curry(10)(40)(80);
console.log(total);
/*
Valor A: 10
Valor B: 40
Valor C: 80
130
*/
