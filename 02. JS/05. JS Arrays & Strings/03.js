function diffEvenOdd(originalArr) {
    let evenSum = 0;
    let oddSum = 0;
    for (const el of originalArr) {

        if (el % 2 == 0) {
            evenSum += el
        }
        else {
            oddSum += el
        }

    }
    console.log(`${evenSum - oddSum}`)
}
diffEvenOdd([1, 2, 3, 4, 5, 6])
diffEvenOdd([3, 5, 7, 9])
diffEvenOdd([2, 4, 6, 8, 10])