let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let multiplicados = [];
let result;

for (index = 0; index <= numbers.length; index += 1) {
    if (index < 9) {
        result = numbers[index] * numbers[index+1];
    }
    multiplicados.push(result);
}

console.log(multiplicados);