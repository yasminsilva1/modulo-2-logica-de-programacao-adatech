//* COERÇÃO IMPLÍCITA
//* de number para string
var numero = 42;
var texto = "O número é: " + numero;
// console.log(texto);

//* de string para number
var texto2 = "10";
var numero2 = Number(texto2) + 2; // 12
var numero4 = +texto2 + 2; // 12
var numero3 = texto2 * 2; // 20
// console.log(numero2);

//* transformando tipo em boolean
var valorNum = "Ola";
var isVerdadeiro = !!valorNum;
// console.log(isVerdadeiro);

//* COERÇÃO EXPLÍCITA
//* de string para number
var valorInteiro = "50";
var valorFlutuante = "50.86";
var numero3 = parseInt(valorInteiro);
var numero3 = parseFloat(valorFlutuante);
var numero3 = Number(valorFlutuante);
// console.log(numero3);

//* de number para string
var numeroParaConversao = 65;
var textoConvertido = numeroParaConversao.toString;
var textoString = String(numeroParaConversao);
// console.log(textoString);

//* usando tamplate literal
var texto = `O número é: ${numero}`;
// console.log(texto);

//* de boolean para numero
var valorBoolean = true;
var numero5 = Number(valorBoolean);
// console.log(numero5); // 1
// console.log(Boolean(numero5));

var valorBoolean2 = false;
var numero6 = Number(valorBoolean2);
// console.log(numero6); // 0
// console.log(Boolean(numero6));

