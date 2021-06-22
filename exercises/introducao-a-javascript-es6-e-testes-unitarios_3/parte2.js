const assert = require('assert');
// escreva a função addOne aqui
/*
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