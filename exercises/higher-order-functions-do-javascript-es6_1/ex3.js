// crie uma HOF que receberá três parâmetros
// O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas 
// (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação 
// final recebida pela pessoa estudante.

// Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const check = (a, b) => {
    let grade = 0;
    for (index = 0; index < a.length; index += 1) {
        if (a[index] === b[index]) {
            grade += 1;
        } else if (b[index] === 'N.A') {
            grade += 0;
        } else {
            grade -= 0.5;
        }
    }
    return grade;
}

function matchAnswers(gabarito, respostas, funcao) {
    return `Sua nota é ${funcao(gabarito, respostas)}`;
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(matchAnswers(rightAnswers, studentAnswers, check));