let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

let infoOther = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for (let infos in info, infoOther) {
    if (info[infos] === info.recorrente && info[infos] === 'Sim' && infoOther[infos] === 'Sim') {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[infos] + ' e ' + infoOther[infos]);
    }
}