// Add your functions here
function map(array, callback) {
    let newArray = []
    for(let i = 0; i<array.length ; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray;
}

function reduce(sourceArray, callback, startingPoint) {
    let memo
    let i
    if (!!startingPoint) {
        memo = startingPoint;
        i = 0;
    } else {
        memo = sourceArray[0];
        i = 1;
    }

    for(; i<sourceArray.length ; i++){
        memo = callback(sourceArray[i],memo);
    }

    // let memo = 0;
    // sourceArray.forEach(element => memo = callback(element,memo));
    return memo;

}