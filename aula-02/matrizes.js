let matriz = [
	[0, 1, 2], // 0
	[3, 4, 5], // 1
	[6, 7, 8], // 2
];

// console.log(matriz[0]); // [ 0, 1, 2 ]
// console.log(matriz[2]); // [ 6, 7, 8 ]
// console.log(matriz[2][1]); // 7

matriz[2].push(10);
console.log(matriz);
/* 
  [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8, 10],
  ]; 
*/
