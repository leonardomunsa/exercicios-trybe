function wakeUp(){ return 'Acordando!!' };

function grabCoffe(){ return 'Bora tomar café!!' };

function goSleep(){ return 'Partiu dormir!!' };

function doingThings(funcao) {
    console.log(funcao());
}


// Ao chamar a função doingThings:
doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!