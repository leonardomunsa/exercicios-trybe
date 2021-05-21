let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let multiplicados = [];

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index + 1] === true) {
        let result = numbers[index] * numbers[index + 1];
        multiplicados.push(result);
    }
    else if (numbers[index + 1] === false) {
        let result = numbers[index] * 2;
        multiplicados.push(result);
    }
}

console.log(multiplicados);