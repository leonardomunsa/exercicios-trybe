// parte 1

let pai = document.querySelector('#pai');
let irmao = document.createElement('div');
irmao.id = 'elementoIrmao';
pai.appendChild(irmao);

// parte 2

let child = document.createElement('div');
child.id = 'filhoDoOndeVoceEsta';
let ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
ondeVoceEsta.appendChild(child);

// parte 3

let firstChild = document.createElement('div');
firstChild.id = 'filhoDoPrimeiroFilho';
let grandson = document.querySelector('#primeiroFilhoDoFilho');
grandson.appendChild(firstChild);

// parte 4

document.querySelector('#filhoDoPrimeiroFilho').parentElement.parentElement.nextSibling;
