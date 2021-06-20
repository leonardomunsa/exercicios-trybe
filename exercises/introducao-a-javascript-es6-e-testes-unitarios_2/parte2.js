const lesson1 = {
	materia: 'Matemática',
	numeroEstudantes: 20,
	professor: 'Maria Clara',
	turno: 'manhã',
};
  
const lesson2 = {
	materia: 'História',
	numeroEstudantes: 20,
	professor: 'Carlos',
};

const lesson3 = {
	materia: 'Matemática',
	numeroEstudantes: 10,
	professor: 'Maria Clara',
	turno: 'noite',
};

const earlyLesson = (objeto, chave, valor) => {
	objeto[chave] = valor;
}

earlyLesson(lesson2, 'turno', 'manhã');

function listKeys(objeto) {
	const listagem = Object.keys(objeto);
	console.log(listagem);
}

// listKeys(lesson1);

const objectSize = (objeto) => {
	const size = Object.keys(objeto);
	console.log(size.length);
}

// objectSize(lesson2);

function listValues(objeto) {
	const valores = Object.values(objeto);
	console.log(valores);
}

// listValues(lesson3);


const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
allLessons.lesson2.turno = 'noite';

// console.log(allLessons);

function allStudents() {
	console.log(`Número total de alunos: ${(lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes)}`);
}

// allStudents();

function getValueByNumber(objeto, posicao) {
	let number = 0;
	for (let index in objeto) {
		if (number === posicao) {
			return objeto[index];
		} else {
			number += 1;
		}
	}
}

// console.log(getValueByNumber(lesson1, 2));

function verifyPair(objeto, chave, valor) {
	const itens = Object.entries(objeto);
	for (let index = 0; index < itens.length; index += 1) {
		if (itens[index][0] === chave && itens[index][1] === valor) { return true };
	}
	return false;
}

console.log(verifyPair(lesson3, 'materia', 'James'));