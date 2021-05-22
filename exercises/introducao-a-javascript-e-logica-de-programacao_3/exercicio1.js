// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

// declarar um n
let n;

// criar um array vazio que armazena os n e printar o array vezes n

let array = [];
let asterisco;

for (let i = 1; i < 5; i += 1) {
    n = "*";
    array.push(n);
}

for (let x = 1; x < 5; x += 1) {
    console.log(array.join(''));
}