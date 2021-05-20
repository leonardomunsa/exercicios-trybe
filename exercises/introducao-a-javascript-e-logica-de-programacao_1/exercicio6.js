let pecaXadrez = "Cavalo";
let xadrez = pecaXadrez.toLowerCase()


switch (xadrez) {
    case "rei":
        console.log("horizontal, vertical e diagonal");
        break;
    case "rainha":
        console.log("horizontal, vertical e diagonal");
        break;
    case "bispo":
        console.log("diaginal");
        break;
    case "cavalo":
        console.log("L");
        break;
    case "torre":
        console.log("vestical e horizontal");
        break;
    case "peão":
        console.log("horizontal, vertical e diagonal");
        break;
    default:
        console.log("error")
}