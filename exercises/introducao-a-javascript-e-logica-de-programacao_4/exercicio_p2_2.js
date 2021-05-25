
function majorIndex (array) {
    let biggest;
    for (let index = 0; index < array.length; index += 1) {
        let bigIndex = array[index];
        for (let index2 = 0; index2 < array.length; index2 += 1) {
            let nextIndex = array[index2];
            if (bigIndex < nextIndex) {
                biggest = index2;
            }
        }
    }
    return biggest;
}

console.log(majorIndex([2, 3, 6, 7, 10, 1]));