function solve(inputArr) {
    let ridersSize = Number(inputArr.shift());
    let riders = [];

    for (let i = 1; i <= ridersSize; i++) {
        let riderDataStr = inputArr.shift().split("|");
        curRiderObject = {};
        curRiderObject.name = riderDataStr[0];
        curRiderObject.fuel = Number(riderDataStr[1]);
        curRiderObject.position = Number(riderDataStr[2]);
        riders.push(curRiderObject)
    }

    function findRiderByName(riderNameSearch) {
        for (riderObj of riders) {
            if (riderObj.name == riderNameSearch) {
                return riderObj;
            }
        }
    }

    i = 0;
    while (inputArr[i] !== "Finish") {
        let [cmd, ...data] = inputArr[i].split(" - ");

        if (cmd == "StopForFuel") {
            let rider = findRiderByName(data[0]);
            let minFuel = Number(data[1]);
            let newPos = Number(data[2]);
            if (rider.fuel < minFuel) {
                rider.position = newPos;
                console.log(`${rider.name} stopped to refuel but lost his position, now he is ${rider.position}.`)
            }
            else {
                console.log(`${rider.name} does not need to stop for fuel!`)
            }
        }

        else if (cmd == "Overtaking") {
            let riderOne = findRiderByName(data[0]);
            let riderTwo = findRiderByName(data[1]);
            if (riderOne.position < riderTwo.position) {
                let riderOneNewPos = riderTwo.position;
                let riderTwoNewPos = riderOne.position;
                riderOne.position = riderOneNewPos;
                riderTwo.position = riderTwoNewPos;
                console.log(`${riderOne.name} overtook ${riderTwo.name}!`)
            }
        }

        else if (cmd == "EngineFail") {
            let rider = findRiderByName(data[0]);
            console.log(`${rider.name} is out of the race because of a technical issue, ${Number(data[1])} laps before the finish.`)
            riders.splice(riders.indexOf(rider), 1);
        }
        i++;
    }

    for (let curRiderPos in riders) {
        console.log(riders[curRiderPos].name)
        console.log(`  Final position: ${riders[curRiderPos].position}`)
    }
}

solve(["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])

solve(["4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])
