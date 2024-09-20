// 6) Percorrer uma string e contar a frequência de cada caractere, ou seja quantas vezes cada um tem na string.
function contaLetras(string) {
  const letrasRepetidas = {};

  for (const letra of string) {
    if (letrasRepetidas[letra]) {
      letrasRepetidas[letra]++;
    } else {
      letrasRepetidas[letra] = 1;
    }
  }
  return letrasRepetidas;
}

const string = "Teste de string";
const repetidas = contaLetras(string);
console.log(repetidas);

// const palavra = "Paralelepipedo";

// function contarFrequenciaCaracter(string) {
// 	string = string.toUpperCase();

// 	const caracteres = new Map();

// 	for (const char of string) {
// 		if (caracteres.has(char)) {
// 			caracteres.set(char, caracteres.get(char) + 1);
// 		} else {
// 			caracteres.set(char, 1);
// 		}
// 	}
// 	return caracteres;
// }

// const frequencia = contarFrequenciaCaracter(palavra);
// console.log(frequencia);