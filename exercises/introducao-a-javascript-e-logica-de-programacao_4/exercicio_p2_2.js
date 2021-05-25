
function majorIndex (array) {
    let bigIndex;
    for (let index = 0; index < array.length; index += 1) {
        if (array[index+1] > array[index]) {
            bigIndex = index+1;
        }
    }
    return bigIndex;
}

console.log(majorIndex([2, 3, 6, 7, 10, 1]));