// Exercicio 1
let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
}
console.log('');

// Exercicio 2

let inputLine2 = '';

for (let lineIndex = 0; lineIndex <= n; lineIndex += 1) {
    console.log(inputLine2)
    inputLine2 = inputLine2 + symbol;
  }
  console.log('');

// Exercicio 3

let inputLine3 = '';
let emptyTriangle = ' ';

for (index = 0; index <= n; index += 1) {
  
  inputLine3 = emptyTriangle + symbol
  
}
for (index = 0; index <= n; index += 1) {
  console.log(inputLine3)
}
