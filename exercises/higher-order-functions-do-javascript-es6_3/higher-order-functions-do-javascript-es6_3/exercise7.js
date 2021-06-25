const assert = require('assert');

const books = require('./exercice1');

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  const findBookName = books.find((book) => book.author.name.startsWith('.', 7));
  return `${findBookName.name}`;
}

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);
