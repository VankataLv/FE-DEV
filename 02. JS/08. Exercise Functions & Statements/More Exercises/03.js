function validityChecker(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    result1 = Math.sqrt(((0 - x1) ** 2) + ((0 - y1) ** 2))
    if (Number.isInteger(result1)) {
        console.log(`\{${x1}, ${y1}\} to {0, 0} is valid`)
    }
    else {
        console.log(`\{${x1}, ${y1}\} to {0, 0} is invalid`)
    }

    result2 = Math.sqrt(((0 - x2) ** 2) + ((0 - y2) ** 2))
    if (Number.isInteger(result2)) {
        console.log(`\{${x2}, ${y2}\} to {0, 0} is valid`)
    }
    else {
        console.log(`\{${x2}, ${y2}\} to {0, 0} is invalid`)
    }
    result3 = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))
    if (Number.isInteger(result3)) {
        console.log(`\{${x1}, ${y1}\} to \{${x2}, ${y2}\} is valid`)
    }
    else {
        console.log(`\{${x1}, ${y1}\} to \{${x2}, ${y2}\} is invalid`)
    }
}

validityChecker([3, 0, 0, 4])
validityChecker([2, 1, 1, 1])