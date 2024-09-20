//* var (escopo global) - escopo fora do bloco
var numero1 = 20;

//* let (escopo local) - escopo restrito ao bloco
{
	let numero2 = 20;
	// console.log(numero2);
}

//* const - não permitido reatribuição
const PI = 3.14;
// console.log(PI);

var numero1 = 30;
// console.log(numero1);

var a = 1;
// console.log(a);

var b = 2, c = 3;
// console.log(b, c);

let f = (g = 5);
// console.log(f, g);

let i = 6, h = i;
// console.log(i, h);

let j = k = l = m = 7, n = k;
// console.log(j, k, l, m, n); // 7 7 7 7 7
