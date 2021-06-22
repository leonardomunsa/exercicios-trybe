const assert = require('assert');

/*
const greetPeople = (people) => {
  let greetingList = [];
  for (let person in people) {
		let greeting = 'Hello ';
    greeting += people[person];
		greetingList.push(greeting);
  }
  return greetingList;
};
  
const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);
*/
/*
const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
	let number = 0;
  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
			number += 1;
      results.push(number);
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(removeVowels(parameter), result);
*/
/*
const greaterThanTen = (array) => {
  let results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.deepStrictEqual(greaterThanTen(parameter), result);
*/

function secondThirdSmallest(array) {
	let results = []
	array.sort(function (x, y) {
			return x - y;
	});
	results = [array[1], array[2]];
	return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(parameter), result);