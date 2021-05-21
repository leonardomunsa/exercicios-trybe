let numbers = [];

for (let i = 0; i < 25; i += 1) {
    numbers.push(i+1);
}

numbers;

let div;

for (let number of numbers) { 
    div = number / 2;
    console.log(div);
}