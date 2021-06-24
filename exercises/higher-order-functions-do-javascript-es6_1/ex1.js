function createObject(nome) {
    const nomeEmail = nome.replace(/\s/g, '_');
    return object = {nome: nome,
    email: `${nomeEmail.toLowerCase()}@trybe.com`};
}

const newEmployees = () => {
    const employees = {
      id1: createObject('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: createObject('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: createObject('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

console.log(newEmployees());