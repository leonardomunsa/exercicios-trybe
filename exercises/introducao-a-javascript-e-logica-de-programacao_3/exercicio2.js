// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, 
// imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// declarar um n
let n;

// criar um array vazio que armazena os n e printar o array vezes n

let array = [];
let asterisco;

for (i = 1; i < 5; i += 1) {
    n = "*";
    array.push(n)
    console.log(array.join(''));
}