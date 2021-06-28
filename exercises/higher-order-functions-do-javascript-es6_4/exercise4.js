const assert = require('assert');

const books = require('./exercise2');

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((acc, curr) => acc.name.length > curr.name.length ? acc : curr);
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);
