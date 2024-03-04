function calc(num1, num2, operator) {

    switch (operator) {
        case "add":
            add = (a, b) => a + b;
            return add(num1, num2);
        case "subtract":
            subtract = (a, b) => a - b;
            return subtract(num1, num2);
        case "multiply":
            multiply = (a, b) => a * b;
            return multiply(num1, num2);
        case "divide":
            divide = (a, b) => a / b;
            return divide(num1, num2);
    }

}

console.log(calc(2, 2, 'add'))
console.log(calc(2, 2, 'subtract'))
console.log(calc(2, 2, 'multiply'))
console.log(calc(2, 2, 'divide'))