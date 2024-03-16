function solve(inputArr) {
    let catologue = {};

    for (el of inputArr) {
        let firstLetterEl = el[0];
        let [key, value] = el.split(" : ");

        if (catologue.hasOwnProperty(firstLetterEl)) {
            catologue[firstLetterEl].push({ [key]: value })
        }
        else {
            catologue[firstLetterEl] = [{ [key]: value }]
        }
    }

    for (firstLetter of Object.keys(catologue).sort()) {
        console.log(firstLetter)

        let sorted = Object.entries(catologue[firstLetter]).sort((a, b) => a[1].localeCompare(b[1]));
        console.log(sorted)
        for (el of catologue[firstLetter]) {
            console.log(`  ${el}: ${el}`)
        }





    }
}


solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)