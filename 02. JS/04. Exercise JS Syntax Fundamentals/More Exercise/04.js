function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let expences = 0;
    let shieldBrokenCounter = 0;

    for (let i = 1; i < lostFights; i++) {

        if (i % 3 == 0 && i % 2 == 0) {
            expences += swordPrice;
            expences += helmetPrice;
            expences += shieldPrice;
            shieldBrokenCounter += 1;
        }

        else if (i % 2 == 0) {
            expences += helmetPrice;
        }
        else if (i % 3 == 0) {
            expences += swordPrice;
        }

        if (shieldBrokenCounter % 2 == 0 && shieldBrokenCounter != 0) {
            expences += armourPrice;
        }
    }
    console.log(`Gladiator expenses: ${expences.toFixed(2)} aureus`)
}

gladiatorExpenses(7, 2, 3, 4, 5)
gladiatorExpenses(23, 12.50, 21.50, 40, 200)