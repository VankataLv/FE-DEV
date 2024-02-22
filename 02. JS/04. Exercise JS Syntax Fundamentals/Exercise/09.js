function fruitCalc(fruit, weightGrams, priceKilo) {
    console.log(`I need $${((weightGrams / 1000) * priceKilo).toFixed(2)} to buy ${(weightGrams / 1000).toFixed(2)} kilograms ${fruit}.`)
}

fruitCalc('orange', 2500, 1.80)