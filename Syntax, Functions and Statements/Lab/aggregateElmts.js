function aggregateElements(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let invertedValues = 0;
    for (let i = 0; i < array.length; i++) {
        invertedValues += 1 / array[i];
    }
    console.log(sum);
    console.log(invertedValues);
    console.log(array.join(''));
}

aggregateElements([1, 2, 3]);