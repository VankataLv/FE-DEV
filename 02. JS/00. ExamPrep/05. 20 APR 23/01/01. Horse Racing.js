function solve(initialArr) {
    let orderArr = initialArr.shift().split("|");

    let line = initialArr.shift(" ");
    while (line != "Finish") {
        let [cmd, token1, token2] = line.split(" ")
        // console.log(orderArr)
        switch (cmd) {
            case 'Retake':
                let overtakingHorseIndex = orderArr.indexOf(token1)
                let overtakenHorseIndex = orderArr.indexOf(token2)
                if (overtakingHorseIndex < overtakenHorseIndex) {
                    let newIndexOfOvertaking = overtakenHorseIndex;
                    let newIndexOfOvertaken = overtakingHorseIndex;

                    orderArr[newIndexOfOvertaking] = token1
                    orderArr[newIndexOfOvertaken] = token2
                    console.log(`${token1} retakes ${token2}`)
                    // console.log(orderArr)
                }
                break;
            case 'Trouble':
                let troubledHorseName = token1;
                if (orderArr.indexOf(troubledHorseName) > 0) {
                    let troubledHorseI = orderArr.indexOf(troubledHorseName)
                    let nextHorseI = troubledHorseI - 1;
                    [orderArr[nextHorseI], orderArr[troubledHorseI]] = [orderArr[troubledHorseI], orderArr[nextHorseI]];
                    console.log(`Trouble for ${troubledHorseName} - drops one position.`)
                }
                break;
            case 'Rage':
                if (orderArr.indexOf(token1) == orderArr.length - 2) {
                    let leadinghorseI = orderArr[orderArr.length - 1]
                    let ragingHorseI = orderArr.indexOf(token1)
                    orderArr[ragingHorseI], orderArr[leadinghorseI] = orderArr[leadinghorseI], orderArr[ragingHorseI];
                    console.log(`${token1} rages 2 positions ahead.`)//horse is second
                }
                else if (orderArr[orderArr.length - 1] == token1) { console.log(`${token1} rages 2 positions ahead.`) } //horse is first
                else {
                    let ragingHorseI = orderArr.indexOf(token1);
                    let otherHorseI1 = ragingHorseI + 1;
                    let otherHorseI2 = ragingHorseI + 2;

                    [orderArr[ragingHorseI], orderArr[otherHorseI1], orderArr[otherHorseI2]] = [orderArr[otherHorseI1], orderArr[otherHorseI2], orderArr[ragingHorseI]];

                    console.log(`${token1} rages 2 positions ahead.`)
                }
                break;
            case 'Miracle':
                let MiracleHorseName = orderArr.shift()
                orderArr.push(MiracleHorseName)
                console.log(`What a miracle - ${MiracleHorseName} becomes first.`)
                break;
        }
        line = initialArr.shift(" ");
    }
    winner = orderArr[-1]
    console.log(`${orderArr.join('->')}`)
    console.log(`The winner is: ${orderArr.pop()}`)
}

solve(['Bella|Alexia|Sugar',
    'Rage Sugar',
    'Rage Alexia',

    'Finish'])
