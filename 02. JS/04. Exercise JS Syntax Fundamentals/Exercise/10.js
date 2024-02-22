function sameNums(num) {
    num = String(num)
    let totalSum = 0;
    let sameNums = true;
    let firstNum = String(num.charAt(0));

    for (let i = 0; i < num.length; i++) {
        curChar = Number(num.charAt(i));
        totalSum += curChar;

        if (String(curChar) != firstNum) {
            sameNums = false;
        }

    }
    console.log(sameNums)
    console.log(totalSum)
}

sameNums(2222222)
