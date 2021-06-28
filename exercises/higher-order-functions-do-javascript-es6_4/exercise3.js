const assert = require('assert');

const books = require('./exercise2');

const expectedResult = 43;

function averageAge() {
  return books.reduce(((acc, curr) => acc += (curr.releaseYear - curr.author.birthYear)), 0) / 6
}

assert.strictEqual(averageAge(), expectedResult);