function month_primer(input) {
    if (input > 12 && input < 1) {
        console.log("Error!")
    }
    else if (input == 1) {
        console.log("January")
    }
    else if (input == 2) {
        console.log("February")
    }
    else if (input == 3) {
        console.log("March")
    }
    else if (input == 4) {
        console.log("April")
    }
    else if (input == 5) {
        console.log("May")
    }
    else if (input == 6) {
        console.log("June")
    }
    else if (input == 7) {
        console.log("July")
    }
    else if (input == 8) {
        console.log("August")
    }
    else if (input == 9) {
        console.log("September")
    }
    else if (input == 10) {
        console.log("October")
    }
    else if (input == 11) {
        console.log("November")
    }
    else if (input == 12) {
        console.log("December")
    }
}

month_primer(5)
month_primer(12)
month_primer(44)
