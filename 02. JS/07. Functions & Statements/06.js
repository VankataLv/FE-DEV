function signCheck(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        console.log("Positive")
    }
    else if (a > 0 && b < 0 && c < 0) {
        console.log("Positive")
    }
    else if (a < 0 && b > 0 && c < 0) {
        console.log("Positive")
    }
    else if (a < 0 && b < 0 && c > 0) {
        console.log("Positive")
    }
    else {
        console.log("Negative")
    }
}

signCheck(45, -8, -1)