function math_operatons(first_num, second_num, operator) {
    let result;
    if (operator == "+") {
        result = first_num + second_num
    }
    else if (operator == "-") {
        result = first_num - second_num
    }
    else if (operator == "*") {
        result = first_num * second_num
    }
    else if (operator == "/") {
        result = first_num / second_num
    }
    else if (operator == "%") {
        result = first_num % second_num
    }
    else if (operator == "**") {
        result = first_num ** second_num
    }
    console.log(result)
}