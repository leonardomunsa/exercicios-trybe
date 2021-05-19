let a_1 = 51;
let a_2 = 32;
let a_3 = 97;

if (a_1 + a_2 + a_3 === 180 && a_1 > 0 && a_2 > 0 && a_3 > 0) {
    console.log(true);
}
else if (a_1 + a_2 + a_3 !== 180 && a_1 > 0 && a_2 > 0 && a_3 > 0) {
    console.log(false);
}
else if (a_1 <= 0 || a_2 <= 0 || a_3 <=0) {
    console.log("error");
}