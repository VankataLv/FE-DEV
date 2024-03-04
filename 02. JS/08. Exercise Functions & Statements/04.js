function oddEvenSums(num) {
    let evenSum = 0;
    let oddSum = 0;
    let numString = num.toString();

    for (let i = 0; i < numString.length; i++) {
        let curNum = Number(numString[i])
        if (curNum % 2 == 0) {
            evenSum += curNum;
        }
        else {
            oddSum += curNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddEvenSums(1000435)
oddEvenSums(3495892137259234)