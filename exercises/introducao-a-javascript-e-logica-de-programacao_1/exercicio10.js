let custoProduto = 100;
let valorVenda = 150;
let imposto = (custoProduto*20)/100;

let custoTotal = custoProduto + imposto;
let lucro = valorVenda - custoTotal;

if (custoProduto < 0 || valorVenda < 0) {
    console.log("error")
}
else {
    console.log(lucro*1000)
}