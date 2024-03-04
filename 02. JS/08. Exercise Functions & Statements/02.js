function addSub(a, b, c) {
    add = (num1, num2) => num1 + num2;
    subtract = (num3, num4) => num3 - num4;
    let result = subtract(add(a, b), c);
    console.log(result)
}

addSub(23, 6, 10)