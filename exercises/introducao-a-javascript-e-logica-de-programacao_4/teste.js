let string = 'james';
let letters = [];
for (letter of string) {
    letters.push(letter);
}

let inverseLetters = [];

for (let i = letters.length - 1; i >= 0; i -= 1) {
    inverseLetters.push(letters[i]);
}

console.log(letters.join(''));
console.log(inverseLetters.join(''));