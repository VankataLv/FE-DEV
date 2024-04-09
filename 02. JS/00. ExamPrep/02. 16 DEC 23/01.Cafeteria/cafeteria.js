function cafeteria(initialArr) {
    const initialNumTeam = Number(initialArr.shift());
    teamDB = {};

    for (let i = 1; i <= initialNumTeam; i++) {
        let [name, shift, skills] = initialArr.shift().split(" ");

        teamDB[name] = {
            shift: shift,
            skills: skills.split(","),
        }
    }
    let line = initialArr.shift();
    while (line !== "Closed") {
        let [cmd, baristaName, token1, token2] = line.split(" / ");

        switch (cmd) {

            case 'Prepare':
                if (teamDB[baristaName].shift == token1 && teamDB[baristaName].skills.includes(token2)) {
                    console.log(`${baristaName} has prepared a ${token2} for you!`)
                }

                else {
                    console.log(`${baristaName} is not available to prepare a ${token2}.`)
                }
                break;

            case 'Change Shift':
                teamDB[baristaName].shift = token1;
                console.log(`${baristaName} has updated his shift to: ${token1}`)
                break;

            case 'Learn':
                if (teamDB[baristaName].skills.includes(token1)) {
                    console.log(`${baristaName} knows how to make ${token1}.`)
                }
                else {
                    teamDB[baristaName].skills.push(token1)
                    console.log(`${baristaName} has learned a new coffee type: ${token1}.`)
                }
                break;
        }

        line = initialArr.shift();
    }
    for (key of Object.keys(teamDB)) {
        console.log(`Barista: ${key}, Shift: ${teamDB[key].shift}, Drinks: ${teamDB[key].skills.join(", ")}`)
    }
}

cafeteria(['4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'David night Espresso',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / day',
    'Learn / Carol / Latte',
    'Prepare / Bob / night / Latte',
    'Learn / David / Cappuccino',
    'Prepare / Carol / day / Cappuccino',
    'Change Shift / Alice / night',
    'Learn / Bob / Mocha',
    'Prepare / David / night / Espresso',
    'Closed'])