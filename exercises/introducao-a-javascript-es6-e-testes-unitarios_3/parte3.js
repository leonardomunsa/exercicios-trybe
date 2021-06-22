const assert = require('assert');

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