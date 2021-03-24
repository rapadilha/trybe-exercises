let a = -2;
let b = 12;
let c = 15;

// Exercicio 1

let soma = a + b;
console.log(soma);

let subtracao = a - b;
console.log(subtracao);

let multiplicacao = a * b;
console.log(multiplicacao);

let divisao = a / b;
console.log(divisao);

let mod = a % b;
console.log(mod);

// Exercicio 2

if (a > b) {
    console.log(a);
}else {
    console.log(b);
}

// Exercicio 3

if (a > b && a > c) {
    console.log(a);
}else if (b > a && b > c) {
    console.log(b);
}else {
    console.log(c);
}

// Exercicio 4

if(a > 0) {
    console.log('positive')
}else if (a < 0) {
    console.log('negative')
}else {
    console.log('zero')
}

// Exercicio 5

let angulo1 = 60;
let angulo2 = 60;
let angulo3 = 90;

let resultado = angulo1 + angulo2 + angulo3;

let angulosPositivos = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (angulosPositivos) {
    if (resultado === 180) {
        console.log (true);
    }else {
        console.log (false);
    }
}else {
    console.log ('erro')
}