function carWash(commands) {
    let value = 0;
    for (let cmd of commands) {
        if (cmd == "soap") {
            value += 10
        }
        else if (cmd == "water") {
            value *= 1.2
        }
        else if (cmd == "vacuum cleaner") {
            value *= 1.25
        }
        else if (cmd == "mud") {
            value *= 0.9
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`)
}

// carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])