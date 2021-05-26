
function biggestChar (array) {
    let palavraMaior = array[0]; 
    for (let letras in array) {

        if (palavraMaior.length < array[letras].length) {
            palavraMaior = array[letras];
        }
    }
    return palavraMaior;   
}

console.log(biggestChar(['José', 'Lucasalmeida', 'Nádia', 'Fernanda', 'Caio', 'Joana']));