function solve(arr) {
    let initialDataLines = Number(arr.shift());
    let riderDB = {};

    for (let i = 0; i < initialDataLines; i++) {
        let [name, fuelCap, position] = arr.shift().split("|")

        riderDB[name] = {
            fuel: Number(fuelCap),
            position: Number(position),
        }
    }

    let cmdLine = arr.shift();
    while (cmdLine !== "Finish") {
        let cmd = cmdLine.split(" - ");

        switch (cmd[0]) {
            case 'StopForFuel': {
                let rider = cmd[1];
                let minFuel = Number(cmd[2]);
                let changedPosition = Number(cmd[3]);


                if (riderDB[rider].fuel < minFuel) {
                    riderDB[rider].position = changedPosition;
                    console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`)
                }
                else {
                    console.log(`${rider} does not need to stop for fuel!`)
                }
                break;
            }
            case 'Overtaking': {
                let rider1 = cmd[1];
                let rider2 = cmd[2];
                if (riderDB[rider1].position < riderDB[rider2].position) {
                    let rider1NewPosition = riderDB[rider2].position;
                    let rider2NewPosition = riderDB[rider1].position;
                    riderDB[rider1].position = rider1NewPosition;
                    riderDB[rider2].position = rider2NewPosition;
                    console.log(`${rider1} overtook ${rider2}!`)
                }
                break;
            }
            case 'EngineFail': {
                let riderNameWithFailedEngine = cmd[1];
                let lapsLeft = cmd[2];
                delete riderDB[riderNameWithFailedEngine];
                console.log(`${riderNameWithFailedEngine} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
                break;
            }
        }
        cmdLine = arr.shift();
    }
    for (let rider of Object.keys(riderDB)) {
        console.log(rider)
        console.log(`Final position: ${riderDB[rider].position}`)
    }
}

// solve((["3",
//     "Valentino Rossi|100|1",
//     "Marc Marquez|90|2",
//     "Jorge Lorenzo|80|3",
//     "StopForFuel - Valentino Rossi - 50 - 1",
//     "Overtaking - Marc Marquez - Jorge Lorenzo",
//     "EngineFail - Marc Marquez - 10",
//     "Finish"])
// )

solve((["4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])
)