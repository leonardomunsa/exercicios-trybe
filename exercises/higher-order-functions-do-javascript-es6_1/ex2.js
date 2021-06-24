function sortNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeBet(funcao, num) {
    return funcao === num ? 'Parabéns você ganhou' : 'Tente novamente'; 
}

console.log(makeBet(sortNumber(1, 5), 2));
