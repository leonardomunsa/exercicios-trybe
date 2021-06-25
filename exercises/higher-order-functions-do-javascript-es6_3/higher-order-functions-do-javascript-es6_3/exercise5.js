const assert = require('assert');

const books = require('./exercice1');

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  return books
    .filter(
      (book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia'
    )
    .map((book) => book.author.name)
    .sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);
