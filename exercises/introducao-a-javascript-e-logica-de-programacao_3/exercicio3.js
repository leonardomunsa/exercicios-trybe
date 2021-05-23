
// eu preciso de um código que imprima 4 linhas, sendo a primeira linha com * e 3 espaços, a segunda 2 * e 2 espaços, a terceira 3 * e 1 espaço, a última 4 *.
// eu posso usar um array e colocar 4 itens dentro dele, sendo os itens respectivamente as linhas do triângulo invertido
// eu posso usar uma variável string e criar um loop que vai adicionar os espaços e os asteriscos de acordo com ele
// eu posso usar um if dentro do loop para adicionar cada vez menos espaços

let n = 4;
let triangulo = '';
let tamanhoTriangulo = n;

for (let i = 0; i < n; i += 1) {
    for (let a = 0; a <= n; a += 1) {
        if (a < tamanhoTriangulo) {
            triangulo = triangulo + ' ';
        }
        else {
            triangulo += '*';
        }
    }
    console.log(triangulo);
    triangulo = '';
    tamanhoTriangulo -= 1;
}