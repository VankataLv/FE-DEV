function solve(inputArr) {
    ranking = [];
    horses = inputArr.shift().split("|");
    let horsesInitialLength = horses.length
    for (let i = 0; i < horsesInitialLength; i++) {
        ranking.push(horses.pop())
    }

    for (line of inputArr) {
        let [cmd, firstData, secondData] = line.split(" ");

        if (cmd == "Retake") {
            let overtaking = firstData;
            let overtaken = secondData;
            if (ranking.indexOf(overtaking) > ranking.indexOf(overtaken)) {
                let newIndexofOvertaking = ranking.indexOf(overtaken);          //0
                let newIndexofOvertaken = ranking.indexOf(overtaking);          //1
                ranking.splice(ranking.indexOf(overtaking), 1)
                ranking.splice(ranking.indexOf(overtaken), 1)
                ranking.splice(newIndexofOvertaking, 0, overtaking)
                ranking.splice(newIndexofOvertaken, 0, overtaken)
                console.log(`${overtaking} retakes ${overtaken}.`)
            }
        }

        else if (cmd == "Trouble") {
            let horse = firstData;
            if (ranking.indexOf(horse) < ranking.length - 1) {
                let oldPosition = ranking.indexOf(horse);
                ranking.splice(oldPosition, 1)
                ranking.splice(oldPosition + 1, 0, horse)
                console.log(`Trouble for ${horse} - drops one position.`)
            }
        }

        else if (cmd == "Rage") {
            let horse = firstData;
            if (ranking.indexOf(horse) == 1) { //horse is second
                ranking.shift(ranking.splice(ranking.indexOf(horse), 1))
            }
            else if (ranking.indexOf(horse) !== 0) {
                let oldPosition = ranking.indexOf(horse);
                ranking.splice(oldPosition, 1)
                ranking.splice(oldPosition - 2, 0, horse)
            }
            console.log(`${horse} rages 2 positions ahead.`)
        }

        else if (cmd == "Miracle") {
            let lastHorse = ranking.pop();
            console.log(`What a miracle - ${lastHorse} becomes first.`)
            ranking.unshift(lastHorse);
        }
        else {
            break
        }
    }
    let winner = ranking[0];
    ranking.reverse()
    console.log(ranking.join("->"))
    console.log(`The winner is: ${winner}`)
}

// solve((['Bella|Alexia|Sugar',
//     'Retake Alexia Sugar',
//     'Rage Bella',
//     'Trouble Bella',
//     'Finish'])
// )

// solve(['Onyx|Domino|Sugar|Fiona',
//     'Trouble Onyx',
//     'Retake Onyx Sugar',
//     'Rage Domino',
//     'Miracle',
//     'Finish'])

solve(['Fancy|Lilly',
    'Retake Lilly Fancy',
    'Trouble Lilly',
    'Trouble Lilly',
    'Finish',
    'Rage Lilly'])
