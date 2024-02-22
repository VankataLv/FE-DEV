function age_determinator(input) {
    input = Number(input)
    let result = "out of bounds";
    if (input >= 0 && input <= 2) {
        result = "baby";
    } else if (input >= 3 && input <= 13) {
        result = "child";
    } else if (input >= 14 && input <= 19) {
        result = "teenager";
    } else if (input >= 20 && input <= 65) {
        result = "adult";
    } else if (input >= 66) {
        result = "elder";
    }
    console.log(result)
}


age_determinator(20)
age_determinator(1)
age_determinator(100)
age_determinator(-1)