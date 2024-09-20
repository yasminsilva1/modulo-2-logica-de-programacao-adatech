// importa o biblioteca readline-sync
const prompt = require("readline-sync");

//* if, else ,else if, switch, ternario

//* IF ELSE
// let idade = prompt.questionInt("Digite sua idade? ");

// if (idade >= 18) {
// 	console.log("Você é maior de idade.");
// } else {
// 	console.log("Vá para casa, você é menor de idade.");
// }

//let nomeDigitado = "Everton";

// if(nomeDigitado){
//     console.log('nome encontrado');
// }else{
//     console.log('nome não encontrado');
// }

//* ELSE IF
// let idade =prompt.question('Digite sua idade? ');

// if(idade <= 2) {
//     valorVenda = 10;
// }else if(idade <=12 ){
//     valorVenda = 12;
// }else if(idade <18 ){
//     valorVenda = 15;
// }else if(idade <=60 ){
//     valorVenda = 20;
// }else {
//     valorVenda = 25;
// }

// console.log(`O valor a ser pago será de R$ ${valorVenda} reais.`);

//* SWITCH CASE
// console.log(`
// 1 - listar
// 2 - deletar
// 3 - pegar por id
// 4 - sair`);

// let opcao = prompt.questionInt('Digite a opcao desejada? ');

// switch(opcao){
//     case 1 :
//         console.log('Listar')
//         break;
//     case 2 :
//         console.log('deletar')
//         break;
//     case 3 :
//         console.log('pegar por id')
//         break;
//     case 4 :
//         console.log('sair');
//         break;
//     default:
//         console.log('Opção Invalida')
// }

//* OPERADOR TERNÁRIO
//*       IF    THEN    ELSE
//* condition ? expr1 : expr2
// const idade = prompt.questionInt("Qual eh a sua idade? ");

// const maior = `A sua idade de ${idade} anos é considerada maior de idade.`;
// const menor = `A sua idade de ${idade} anos é considerada menor de idade.`;

// const maiorDeIdade = idade >= 18 ? maior : menor;

// console.log(maiorDeIdade);
