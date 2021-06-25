const assert = require('assert');

const books = require('./exercice1');

const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
	const bookArray = books.map((element) => ({author: element.author.name, age: element.releaseYear - element.author.birthYear, }))
	bookArray.sort((a, b) => a.age - b.age);
	return bookArray;
}

assert.deepStrictEqual(nameAndAge(), expectedResult);