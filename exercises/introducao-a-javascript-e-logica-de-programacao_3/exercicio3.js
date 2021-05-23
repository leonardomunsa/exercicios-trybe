
// eu preciso de um código que imprima 4 linhas, sendo a primeira linha com * e 3 espaços, a segunda 2 * e 2 espaços, a terceira 3 * e 1 espaço, a última 4 *.
// eu posso usar um array e colocar 4 itens dentro dele, sendo os itens respectivamente as linhas do triângulo invertido

let triangulo = [];

for (let index = 1; index < 3; index += 1) {
    for (let indox = 3; indox <= 0; indox -= 1) {
        triangulo.push('&nbsp;&nbsp;&nbsp;*');
    }
    triangulo.push('*');
}

console.log(triangulo.join(''));