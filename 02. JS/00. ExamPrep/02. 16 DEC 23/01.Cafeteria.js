function solve(inputArr) {
    let team = [];
    let teamSize = Number(inputArr.shift());

    for (let i = 0; i <= teamSize - 1; i++) {
        let baristaInfo = (inputArr.shift());
        let [name, shift, coffeeTypes] = baristaInfo.split(" ");
        let curObj = {};
        curObj.name = name;
        curObj.shift = shift;
        curObj.skills = coffeeTypes.split(",");
        team.push(curObj)
    }

    function findBaristaByName(nameSearched) {
        for (let el of team) {
            if (el.name == nameSearched) {
                return el
            }
        }
    }

    let i = 0;
    while (inputArr[i] !== 'Closed') {
        let curLineArr = inputArr[i].split(" / ");
        let cmd = curLineArr[0];
        let barista = findBaristaByName(curLineArr[1]);

        if (cmd == "Prepare") {

            if (barista.shift == curLineArr[2] && barista.skills.includes(curLineArr[3])) {
                console.log(`${curLineArr[1]} has prepared a ${curLineArr[3]} for you!`)
            }
            else {
                console.log(`${curLineArr[1]} is not available to prepare a ${curLineArr[3]}.`)
            }
        }
        else if (cmd == "Change Shift") {
            barista.shift = curLineArr[2]
            console.log(`${barista.name} has updated his shift to: ${barista.shift}`)
        }
        else if (cmd == "Learn") {
            if (barista.skills.includes(curLineArr[2])) {
                console.log(`${barista.name} knows how to make ${curLineArr[2]}.`)
            }
            else {
                barista.skills.push(curLineArr[2])
                console.log(`${barista.name} has learned a new coffee type: ${curLineArr[2]}.`)
            }
        }
        i++;
    }

    for (barista of team) {
        console.log(`Barista: ${barista.name}, Shift: ${barista.shift}, Drinks: ${barista.skills.join(", ")}`)
    }
}

solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed']);
