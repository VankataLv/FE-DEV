function namesList(arr) {
    let sortedArr = arr.sort();

    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}.${sortedArr[i]}`)
    }
}

namesList(["John", "Bob", "Christina", "Ema"])