function bitcoin(goldDay) {
    let moneyAvaillable = 0
    let day = 0
    let bitcoinBought = 0
    let dayFirstBitcoinBought = 0

    for (let i = 0; i < goldDay.length; i++) {
        day += 1;
        let goldMinedToday = 0;

        if (day % 3 === 0) {
            goldMinedToday += 0.7 * goldDay[i];
        }
        else {
            goldMinedToday += goldDay[i];
        }

        moneyAvaillable += goldMinedToday * 67.51;

        while (moneyAvaillable >= 11949.16) {
            bitcoinBought += 1;
            if (bitcoinBought == 1) {
                dayFirstBitcoinBought = day;
            }
            moneyAvaillable -= 11949.16;
        }
    }

    console.log(`Bought bitcoins: ${bitcoinBought}`)
    if (dayFirstBitcoinBought) {
        console.log(`Day of the first purchased bitcoin: ${dayFirstBitcoinBought}`)
    }
    console.log(`Left money: ${moneyAvaillable.toFixed(2)} lv.`)
}

bitcoin([100, 200, 300])
bitcoin([50, 100])
bitcoin([3124.15, 504.212, 2511.124])