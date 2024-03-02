function sortingNums(arr) {
    let sortedNums = arr.sort((a, b) => a - b);
    let result = []
    while (sortedNums.length > 0) {
        let firstNum = sortedNums.shift();
        result.push(firstNum);
        let lastNum = sortedNums.pop();
        if (lastNum) {
            result.push(lastNum)
        }

    }
    return result
}


console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));