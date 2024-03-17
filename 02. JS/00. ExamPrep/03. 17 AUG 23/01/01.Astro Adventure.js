function solve(inputArr) {
    let teamSize = Number(inputArr.shift());
    let crew = [];

    for (let i = 1; i <= teamSize; i++) {
        let line = inputArr.shift().split(" ");
        let curAstro = {};
        curAstro.name = line[0];
        curAstro.oxygen = Number(line[1]);
        curAstro.energy = Number(line[2]);
        crew.push(curAstro)
    }

    function findAstroByName(nameSearched) {
        for (let astroObj of crew) {
            if (astroObj.name == nameSearched) {
                return astroObj
            }
        }
    }

    i = 0;
    while (inputArr[i] !== "End") {
        let [cmd, name, amount] = inputArr[i].split(" - ");
        amount = Number(amount);

        let astronaut = findAstroByName(name);

        if (cmd == "Explore") {
            if (astronaut.energy >= amount) {
                astronaut.energy -= amount
                console.log(`${astronaut.name} has successfully explored a new area and now has ${astronaut.energy} energy!`)
            }
            else {
                console.log(`${astronaut.name} does not have enough energy to explore!`)
            }
        }

        else if (cmd == "Refuel") {
            let energyRefueled = 0;
            if (astronaut.energy + amount > 200) {
                energyRefueled = 200 - astronaut.energy;
                astronaut.energy = 200
            }
            else {
                energyRefueled = amount;
                astronaut.energy += energyRefueled
            }
            console.log(`${astronaut.name} refueled their energy by ${energyRefueled}!`)
        }

        else if (cmd == "Breathe") {
            let oxygenRefueled = 0;
            if (astronaut.oxygen + amount > 100) {
                oxygenRefueled = 100 - astronaut.oxygen;
                astronaut.oxygen = 100;
            }
            else {
                oxygenRefueled = amount;
                astronaut.oxygen += oxygenRefueled;
            }
            console.log(`${astronaut.name} took a breath and recovered ${oxygenRefueled} oxygen!`)
        }
        i++;
    }
    for (astro of crew) {
        console.log(`Astronaut: ${astro.name}, Oxygen: ${astro.oxygen}, Energy: ${astro.energy}`)
    }

}

solve(['3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - John - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End']
)

solve(['4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End']
)