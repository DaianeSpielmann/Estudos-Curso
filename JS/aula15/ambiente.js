var numero = [5, 8, 2, 9, 3];

numero.push(1);
numero.sort();
console.log(numero);
console.log(`O vetor tem ${numero.length} posições`);
console.log(`O primeiro valor do vetor é ${numero[0]}`);

var pos = numero.indexOf(8);
if (pos == -1) {
  console.log(`O valor não foi encontrado!`);
} else {
  console.log(`O valor está na posição ${pos}`);
}
