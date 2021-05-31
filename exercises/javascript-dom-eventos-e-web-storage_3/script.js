function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();

// Escreva seu código abaixo.

function daysList() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const ulDays = document.querySelector('#days');

    for (let i = 0; i < dezDaysList.length; i += 1) {
        let num = dezDaysList[i];
        let list = document.createElement('li');
        list.innerText = num;
        list.className = 'day';
        ulDays.appendChild(list);

        if (num === 24 || num === 25 || num === 31) {
            list.classList.add('holiday');
        } 
        if (num === 4 || num === 11 || num === 18 || num === 25) {
            list.classList.add('friday');
        }
    }
}

daysList();

function holidayButton(string) {
    let button = document.createElement('button');
    button.innerText = string;
    button.id = 'btn-holiday';
    let dad = document.querySelector('.buttons-container');
    dad.appendChild(button);
}

holidayButton('Feriados');