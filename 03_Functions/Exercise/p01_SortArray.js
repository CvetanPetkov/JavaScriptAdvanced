function sortarray(inputArr, sortMethod) {

    let ascendingCompare = ((a, b) => a - b);
    let descendingCompare = ((a, b) => b - a);

    let sortingStrategies = {
        asc: ascendingCompare,
        desc: descendingCompare
    };

    return inputArr.sort(sortingStrategies[sortMethod]);
}
//console.log(sortarray([14, 7, 17, 6, 8], 'desc'));