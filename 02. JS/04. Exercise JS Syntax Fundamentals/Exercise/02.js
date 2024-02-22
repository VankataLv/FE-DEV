function Vacation(groupSize, category, day) {
    let pricePerPerson;
    let totalPrice;

    if (day == "Friday") {
        if (category == "Students") {
            pricePerPerson = 8.45
        } else if (category == "Business") {
            pricePerPerson = 10.90
        } else if (category == "Regular") {
            pricePerPerson = 15
        }
    }

    else if (day == "Saturday") {
        if (category == "Students") {
            pricePerPerson = 9.80
        } else if (category == "Business") {
            pricePerPerson = 15.60
        } else if (category == "Regular") {
            pricePerPerson = 20
        }
    }

    else if (day == "Sunday") {
        if (category == "Students") {
            pricePerPerson = 10.46
        } else if (category == "Business") {
            pricePerPerson = 16
        } else if (category == "Regular") {
            pricePerPerson = 22.50
        }
    }

    if (groupSize >= 30 && category == "Students") {
        totalPrice = pricePerPerson * groupSize * 0.85
    }
    else if (groupSize >= 100 && category == "Business") {
        totalPrice = pricePerPerson * (groupSize - 10)
    }
    else if (groupSize >= 10 && groupSize <= 20 && category == "Regular") {
        totalPrice = pricePerPerson * groupSize * 0.95
    }
    else {
        totalPrice = pricePerPerson * groupSize
    }
}
