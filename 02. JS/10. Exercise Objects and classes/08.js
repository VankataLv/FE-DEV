function piccolo(inputArr) {
    let parkedCars = [];

    for (let i = 0; i < inputArr.length; i++) {
        let [cmd, carNumber] = inputArr[i].split(", ")

        if (cmd === "IN") {
            parkedCars.push(carNumber)
        }
        else if (cmd === "OUT") {
            parkedCars.pop(carNumber)
        }
    }

    if (parkedCars.length == 0) {
        console.log("Parking Lot is Empty")
    }

    else {
        parkedCars = parkedCars.sort()
        for (let el of parkedCars) {
            console.log(el)
        }
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)