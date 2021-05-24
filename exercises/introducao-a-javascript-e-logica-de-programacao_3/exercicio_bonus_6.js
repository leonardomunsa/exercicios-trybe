let numero = 103;
let primo = [];

for (let numeroAnterior = 0; numeroAnterior <= numero; numeroAnterior += 1) {
    if (numero % numeroAnterior === 0) {
        primo.push(numeroAnterior);
    }
    else {
        // do nothing
    }
}

if (primo.length === 2) {
    console.log('É primo');
}
else {
    console.log('Não é primo');
}