const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // return names.reduce(((acc, curr) => acc += curr.toLowerCase().replace(/[^a]/g, '').length), 0)
  // return names.reduce(((acc, curr) => acc += curr.toLowerCase().split('a').length -1), 0)
  return names.reduce(((acc, curr) => acc += curr.match(/a/gi).length), 0)
}

assert.deepStrictEqual(containsA(), 20);