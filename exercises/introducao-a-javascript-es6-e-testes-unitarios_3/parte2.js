const assert = require('assert');
// escreva a função addOne aqui

function addOne(array) {
    let newArray = [];
    for (let index = 0; index < array.length; index += 1) {
        newArray.push(array[index] + 1);
    }
    return newArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
*/

// escreva a função wordLengths aqui

const wordLengths = (array) => {
    let newArray = [];
    for (let index = 0; index < array.length; index += 1) {
        newArray.push(array[index].length);
    }
    return newArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
*/

// escreva a função sumAllNumbers aqui

function sumAllNumbers(array) {
    let sum = 0;
    for (let index = 0; index < array.length; index += 1) {
        sum += array[index];
    }
    return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);


// escreva a função findTheNeedle aqui

const findTheNeedle = (array, string) => {
    for (let index = 0; index < array.length; index += 1) {
        if (array[index] === string) { return index };
    }
    return -1;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);