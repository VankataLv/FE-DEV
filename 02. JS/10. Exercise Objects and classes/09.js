function makeDictionary(inputArr) {
    let dict = {}

    for (let el of inputArr) {
        let line = JSON.parse(el)
        let key = Object.keys(line)[0]
        let value = Object.values(line)[0]
        dict[key] = value
    }

    let sortedDictArr = Object.entries(dict);
    sortedDictArr.sort((a, b) => a[0].localeCompare(b[0]))

    for (el of sortedDictArr) {

        console.log(`Term: ${el[0]} => Definition: ${el[1]}`)
    }

}
makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)
