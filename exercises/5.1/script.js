document.getElementById("header-container").style.backgroundColor = "green";

let purple = document.querySelectorAll("section.emergency-tasks div h3");

let i;
for (i = 0; i < purple.length; i += 1) {
    purple[i].style.backgroundColor = 'purple';
}

let orange = document.querySelectorAll('.emergency-tasks');

for (i = 0; i < orange.length; i += 1) {
    orange[i].style.backgroundColor = 'orange';
}

let black = document.querySelectorAll('section.no-emergency-tasks div h3');

for (i = 0; i < black.length; i += 1) {
    black[i].style.backgroundColor = 'black';
}

let yellow = document.querySelectorAll('.no-emergency-tasks');

for (i = 0; i < yellow.length; i += 1) {
    yellow[i].style.backgroundColor = 'yellow';
}

document.getElementById("footer-container").style.backgroundColor = 'green';