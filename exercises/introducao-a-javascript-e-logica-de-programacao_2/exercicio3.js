let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let media;
let lista = 0;
let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
    lista = i + 1;
}

media = soma/lista;
console.log(media);