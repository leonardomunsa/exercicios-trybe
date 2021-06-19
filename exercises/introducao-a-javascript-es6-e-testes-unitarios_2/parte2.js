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

listKeys(lesson1);