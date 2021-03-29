// Exercicio 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}
console.log('');

// Exercicio 2

let soma = 0;

for (index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
console.log('');
console.log(soma);

// Exercicio 3

let media = 0;

for (index = 0; index < numbers.length; index += 1) {
    media = soma / numbers.length;
}    
console.log(media);
console.log('');

// Exercicio 4

if(media > 20) {
    console.log('Valor maior que 20.')
}else {
    console.log('Valor menor que 20.')
}
console.log('');

// Exercicio 5

let maiorValor = 0;

for (index = 0; index < numbers.length; index += 1) {
    if(numbers[index] > maiorValor){
        maiorValor = numbers[index];
    }
}
console.log(maiorValor);
console.log('');

// Exercicio 6

let valorImpar = 0;

for (index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 != 0){
        valorImpar += 1;  
    }
    
}

if(valorImpar === 0) {
    console.log('Nenhum valor impar!')
}else{
    console.log(valorImpar);
}
console.log('');

// Exercicio 7
// let menorValor = Math.min.apply(Math, numbers);

let menorValor = 1000000;

for (index = 0; index < numbers.length; index += 1) {
    if(numbers[index] < menorValor){
        menorValor = numbers[index];
    }
}
console.log(menorValor);
console.log('');

// Exercicio 8

let arr = [];

for (index = 1; index <= 25; index += 1) {
        arr.push(index);
}
console.log(arr);
console.log('');

// Exercicio 9

div = [];

for (index = 0; index < arr.length; index += 1) {
    div.push(arr[index] / 2)
}
console.log(div)