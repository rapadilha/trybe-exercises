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

// Exercicio 6

let chessPiece = 'KinG';

switch (chessPiece.toLowerCase()) {
    case 'king':
        console.log('King > Uma casa para qualquer lado');
    break;    

    case 'queen':
        console.log('Queen > Todas as direções, sendo uma por vez');
    break;

    case 'bishop':
        console.log('Bishop > Diagonais');
    break;

    case 'horse':
        console.log('Horse > Movimento em "L" e pode pular peças');
    break;

    case 'pawn':
        console.log('Pawn > Uma casa a frente, e duas casas na primeira rodada');
    break;

    default:
        console.log('Error');
    break;
}

// Exercicio 7

let percent = Math.ceil(Math.random() * 100);

if (percent >= 90 && percent <= 100) {
    console.log('A');
}else if (percent >= 80 && percent <= 100) {
    console.log('B');
}else if (percent >= 70 && percent <= 100) {
    console.log('C');
}else if (percent >= 60 && percent <= 100) {
    console.log('D');
}else if (percent >= 50 && percent <= 100) {
    console.log('E');
}else if (percent < 50 && percent >= 0) {
    console.log('F');
}else {
    console.log('Error');
}

// Exercicio 8

let num1 = 2;
let num2 = 3;
let num3 = 2;

if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log(true);
}else {
    console.log(false);
}

// Exercicio 9

if(num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
    console.log(true);
}else {
    console.log(false);
}

// Exercico 10

let cost = 100;
let saleValue = 150;
let tax = cost * 0.2;
let totalCost = cost + tax;
let gain = saleValue - totalCost;

if(totalCost < 0 || saleValue < 0) {
    console.log('Erro');
}else{
    console.log('Meu lucro foi: ' + gain + '.')
}

// Exercicio 11

let salary = 8000;
let inss;
let ir;


if (salary <= 1556.94) {
    inss = salary - (salary * 0.08);
    console.log(inss);

}else if (salary > 1556.94 && salary <= 2594.92) {
    inss = salary - (salary * 0.09)
    console.log(inss)

}else if (salary > 2594.92 && salary <= 5189.82) {
    inss = salary - (salary * 0.11)
    console.log(inss);

}else {
    inss = salary - 570.88;
    console.log(inss)
}

let netSalary;

if(inss <= 1903.98) {
    netSalary = inss
    console.log(netSalary)
}else if (inss > 1903.98 && inss <= 2826.65) {
    netSalary = inss - ((inss * 0.075) - 142.8);
    console.log(netSalary);

}else if (inss > 2826.65 && inss <= 3751.05) {
    netSalary = inss - ((inss * 0.15) - 354.8);
    console.log(netSalary);

}else if (inss > 3751.05 && inss <= 4664.68) {
    netSalary = inss - ((inss * 0.225) - 636.13);
    console.log(netSalary);

}else {
    netSalary = inss - ((inss * 0.275) - 869.36);
    console.log('Meu salário liquido é: ' + netSalary);
}
