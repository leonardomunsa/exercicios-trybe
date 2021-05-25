
function minorIndex (array) {
    let smallest;
    for (let index = 0; index < array.length; index += 1) {
        let prevIndex = array[index];
        for (let index2 = 0; index2 < array.length; index2 += 1) {
            let nextIndex = array[index2];
            if (prevIndex > nextIndex) {
                smallest = index2;
            }
        }
    }
    return smallest;
}

console.log(minorIndex([2, 4, 6, 7, 10, 0, -3]));