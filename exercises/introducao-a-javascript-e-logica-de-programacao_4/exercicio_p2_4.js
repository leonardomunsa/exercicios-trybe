
function biggestChar (array) {
    let maxString;
    for (index = 0; index < array.length; index += 1) {
        maxString = array[index];
        let count = [];
        for (letter of maxString) {
            count.push(letter);
        }
    }
    return maxString;
}

console.log(biggestChar(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));