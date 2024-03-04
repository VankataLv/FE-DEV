function passVal(input) {
    let validPass = true

    if (6 > input.length || input.length > 10) {
        validPass = false;
        console.log("Password must be between 6 and 10 characters")
    }

    if (!(/^[A-Za-z0-9]*$/.test(input))) {
        validPass = false;
        console.log("Password must consist only of letters and digits")
    }

    if (!(/(\D*\d){2,}/.test(input))) {
        validPass = false;
        console.log("Password must have at least 2 digits")
    }

    if (validPass) {
        console.log("Password is valid")
    }
}

passVal("sadda21")