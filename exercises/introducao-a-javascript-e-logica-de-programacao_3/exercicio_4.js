// eu preciso de um código que monte um triangulo
// o código deve montar uma linha inicial com 1 * e seguir o padrão de impar até a última linha igualar o valor de n
// nesse caso, vamos usar n = 5 para manter um padrão iniciando com 1 *
// a primeira linha = espaço espaço * espaço espaço
// a segunda linha = espaço *** espaço
// a terceira linha = *****

let n = 5;
let triangulo = '';
let limite = n;

for (let index = 0; index < n; index += 1) {
    if (index === 0) {
        for (let secondIndex = 0; secondIndex <= limite; secondIndex += 1) {
            if (secondIndex < 2) {
                triangulo += ' ';
            }
            else if (secondIndex === 3) {
                triangulo += '*';
            }
            else if (secondIndex > 3) {
                triangulo += ' ';
            }
        }
    }
    else if (index === 1) {
        for (let thirdIndex = 0; thirdIndex <= limite; thirdIndex += 1) {
            if (thirdIndex < 1) {
                triangulo += ' ';
            }
            else if (thirdIndex <= 3) {
                triangulo += '*';
            }
            else if (thirdIndex > 3) {
                triangulo += ' ';
            }
        }
    }
    else if (index === 2) {
        for (let forthIndex = 0; forthIndex < n; forthIndex += 1) {
            triangulo += '*';
        }
    }
    console.log(triangulo);
    triangulo = '';
    limite -= 1;
}