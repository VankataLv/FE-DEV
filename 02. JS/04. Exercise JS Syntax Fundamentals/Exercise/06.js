function sumDigits(num) {
    let totalSum = 0;
    num = String(num)
    for (let i = 0; i < num.length; i++) {
        curChar = Number(num.charAt(i));
        totalSum += curChar;
    }
    console.log(totalSum)
}

sumDigits(245678)