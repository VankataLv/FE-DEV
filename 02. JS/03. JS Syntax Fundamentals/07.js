function ticket_sale(day_type, age) {
    if (age < 0 || age > 122) {
        console.log("Error!")
    }
    else {
        if (age >= 0 && age <= 18) {
            if (day_type == "Weekday") {
                console.log("12$")
            }
            else if (day_type == "Weekend") {
                console.log("15$")
            }
            else if (day_type == "Holiday") {
                console.log("5$")
            }

        }
        else if (age > 18 && age <= 64) {
            if (day_type == "Weekday") {
                console.log("18$")
            }
            else if (day_type == "Weekend") {
                console.log("20$")
            }
            else if (day_type == "Holiday") {
                console.log("12$")
            }
        }
        else if (age > 64 && age <= 122) {
            if (day_type == "Weekday") {
                console.log("12$")
            }
            else if (day_type == "Weekend") {
                console.log("15$")
            }
            else if (day_type == "Holiday") {
                console.log("10$")
            }
        }
    }
}
