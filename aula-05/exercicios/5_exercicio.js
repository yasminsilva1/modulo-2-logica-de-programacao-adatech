//* 5) Escreva um loop while que imprima a sequência Fibonacci com os primeiros 10 números.

let a = 0;
let b = 1;
let somaAeB = 0;
let i = 1;

while (i <= 10) {
  console.log(a);
  somaAeB = a + b;
  a = b;
  b = somaAeB;
  i++;
}