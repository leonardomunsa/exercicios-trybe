
function getString (string) {
    
    let letters = [];

    for (letter of string) {
        letters.push(letter);
    }
    
    let inverseLetters = [];

    for (let i = letters.length - 1; i >= 0; i -= 1) {
        inverseLetters.push(letters[i]);
    }

    let normalWord = letters.join('');
    let inverseWord = inverseLetters.join('');

    if (normalWord.toLowerCase() === inverseWord.toLowerCase()) {
        return true    
    } else {
        return false
    }
}

console.log(getString('arara'));