let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let multiplicados = [];

for (index = 0; index < numbers.length; index += 1) {
    let result = numbers[index] * numbers[index + 1];
    multiplicados.push(result);
}

console.log(multiplicados);