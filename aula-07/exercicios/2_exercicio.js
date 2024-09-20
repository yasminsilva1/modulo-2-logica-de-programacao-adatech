//* 2) Escreva uma função chamada compor que aceita uma matriz de funções e retorna uma nova função que executa cada função na matriz em sequência, passando o resultado de uma como entrada para a próxima.

function compor(a) {
  return function(b){
    return function(c) {
      return a + b + c;
    }
  }
}

let total = compor(2)(2)(2);
console.log(total);