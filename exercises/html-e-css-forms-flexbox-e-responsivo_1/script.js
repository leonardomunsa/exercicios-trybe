const data = document.getElementsByTagName('input')[9].value;
const dia = parseInt(data.substr(0, 2));
const mes = parseInt(data.substr(4, 2));
const ano = parseInt(data.substr(6, 4));
if (data.substr(2, 1) !== '/' || data.substr(5, 1) !== '/') {alert('insira a data de maneira correta: dd/mm/aaaa')};
if (dia < 0 || dia > 31) {alert("o dia deve ser maior que 1 e menor que 31, caso seja menor que 10, insira da forma '0X'")};
if (mes < 0 || mes > 12) {alert("o mês deve ser maior que 0 e menor que 12, caso seja menor que 10, insira da forma '0X'")};
if (ano < 0) {alert('O ano deve ser maior que 0')};
