let salarioBruto = 3000;

let aliquotaInss;

let impostoInss;

let salarioLiquido;

let aliquotaIr;

let impostoIr;
let deducao;

let salarioFinal;

if (salarioBruto <= 1500.10) {
    aliquotaInss = 8/100;
    impostoInss = salarioBruto * (aliquotaInss);
    salarioLiquido = salarioBruto - impostoInss;
        if (salarioLiquido <= 1903.98) {
            aliquotaIr = 0;
            deducao = 0;
            console.log(salarioLiquido);
        }
        else if (salarioLiquido > 1903.98 && salarioLiquido <= 2826.65) {
            aliquotaIr = 7.5/100;
            deducao = 142.80;
            impostoIr = salarioLiquido * (aliquotaIr);
            salarioFinal = salarioLiquido - (impostoIr - deducao);
            console.log(salarioFinal);
        }
        else if (salarioLiquido > 2826.65 && salarioLiquido <=3751.05) {
            aliquotaIr = 15/100;
            deducao = 345.80;
            impostoIr = salarioLiquido * (aliquotaIr);
            salarioFinal = salarioLiquido - (impostoIr - deducao);
            console.log(salarioFinal);
        }
        else if (salarioLiquido > 3751.05 && salarioLiquido <= 4664.68) {
            aliquotaIr = 22.5/100;
            deducao = 636.13;
            impostoIr = salarioLiquido * (aliquotaIr);
            salarioFinal = salarioLiquido - (impostoIr - deducao);
            console.log(salarioFinal);
        }
        else if (salarioLiquido > 4664.68) {
            aliquotaIr = 27.5/100;
            deducao = 869.36;
            impostoIr = salarioLiquido * (aliquotaIr);
            salarioFinal = salarioLiquido - (impostoIr - deducao);
            console.log(salarioFinal);
        }
}
else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
        aliquotaInss = 9/100;
        impostoInss = salarioBruto * (aliquotaInss);
        salarioLiquido = salarioBruto - impostoInss;
            if (salarioLiquido <= 1903.98) {
                aliquotaIr = 0;
                deducao = 0;
                console.log(salarioLiquido);
            }
            else if (salarioLiquido > 1903.98 && salarioLiquido <= 2826.65) {
                aliquotaIr = 7.5/100;
                deducao = 142.80;
                impostoIr = salarioLiquido * (aliquotaIr);
                salarioFinal = salarioLiquido - (impostoIr - deducao);
                console.log(salarioFinal);
            }
            else if (salarioLiquido > 2826.65 && salarioLiquido <=3751.05) {
                aliquotaIr = 15/100;
                deducao = 345.80;
                impostoIr = salarioLiquido * (aliquotaIr);
                salarioFinal = salarioLiquido - (impostoIr - deducao);
                console.log(salarioFinal);
            }
            else if (salarioLiquido > 3751.05 && salarioLiquido <= 4664.68) {
                aliquotaIr = 22.5/100;
                deducao = 636.13;
                impostoIr = salarioLiquido * (aliquotaIr);
                salarioFinal = salarioLiquido - (impostoIr - deducao);
                console.log(salarioFinal);
            }
            else if (salarioLiquido > 4664.68) {
                aliquotaIr = 27.5/100;
                deducao = 869.36;
                impostoIr = salarioLiquido * (aliquotaIr);
                salarioFinal = salarioLiquido - (impostoIr - deducao);
                console.log(salarioFinal);
            }
}
else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    aliquotaInss = 11/100;
    impostoInss = salarioBruto * (aliquotaInss);
    salarioLiquido = salarioBruto - impostoInss;
        if (salarioLiquido <= 1903.98) {
            aliquotaIr = 0;
            deducao = 0;
            console.log(salarioLiquido);
        }
        else if (salarioLiquido > 1903.98 && salarioLiquido <= 2826.65) {
            aliquotaIr = 7.5/100;
            deducao = 142.80;
            impostoIr = salarioLiquido * (aliquotaIr);
            salarioFinal = salarioLiquido - (impostoIr - deducao);
            console.log(salarioFinal);
        }
        else if (salarioLiquido > 2826.65 && salarioLiquido <=3751.05) {
            aliquotaIr = 15/100;
            deducao = 345.80;
            impostoIr = salarioLiquido * (aliquotaIr);
            salarioFinal = salarioLiquido - (impostoIr - deducao);
            console.log(salarioFinal);
        }
        else if (salarioLiquido > 3751.05 && salarioLiquido <= 4664.68) {
            aliquotaIr = 22.5/100;
            deducao = 636.13;
            impostoIr = salarioLiquido * (aliquotaIr);
            salarioFinal = salarioLiquido - (impostoIr - deducao);
            console.log(salarioFinal);
        }
        else if (salarioLiquido > 4664.68) {
            aliquotaIr = 27.5/100;
            deducao = 869.36;
            impostoIr = salarioLiquido * (aliquotaIr);
            salarioFinal = salarioLiquido - (impostoIr - deducao);
            console.log(salarioFinal);
        }
}
else if (salarioBruto > 5189.82) {
    impostoInss = 570.88;
    salarioLiquido = salarioBruto - impostoInss;
        if (salarioLiquido <= 1903.98) {
            aliquotaIr = 0;
            deducao = 0;
            console.log(salarioLiquido);
        }
        else if (salarioLiquido > 1903.98 && salarioLiquido <= 2826.65) {
            aliquotaIr = 7.5/100;
            deducao = 142.80;
            impostoIr = salarioLiquido * (aliquotaIr);
            salarioFinal = salarioLiquido - (impostoIr - deducao);
            console.log(salarioFinal);
        }
        else if (salarioLiquido > 2826.65 && salarioLiquido <=3751.05) {
            aliquotaIr = 15/100;
            deducao = 345.80;
            impostoIr = salarioLiquido * (aliquotaIr);
            salarioFinal = salarioLiquido - (impostoIr - deducao);
            console.log(salarioFinal);
        }
        else if (salarioLiquido > 3751.05 && salarioLiquido <= 4664.68) {
            aliquotaIr = 22.5/100;
            deducao = 636.13;
            impostoIr = salarioLiquido * (aliquotaIr);
            salarioFinal = salarioLiquido - (impostoIr - deducao);
            console.log(salarioFinal);
        }
        else if (salarioLiquido > 4664.68) {
            aliquotaIr = 27.5/100;
            deducao = 869.36;
            impostoIr = salarioLiquido * (aliquotaIr);
            salarioFinal = salarioLiquido - (impostoIr - deducao);
            console.log(salarioFinal);
        }
}