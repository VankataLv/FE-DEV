function solve(inputArr) {
    let queuriesArr = inputArr.shift().split(" ");
    let querryHitsCounter = {};
    for (const querry of queuriesArr) {
        if (!querryHitsCounter.hasOwnProperty(querry)) {
            querryHitsCounter[querry] = 0
        }
    }

    for (let word of inputArr) {
        if (querryHitsCounter.hasOwnProperty(word)) {
            querryHitsCounter[word] += 1
        }
    }

    let sortedQuerryHitsCounter = Object.entries(querryHitsCounter);
    sortedQuerryHitsCounter.sort((a, b) => b[0].localeCompare(a[0]));

    for (el of sortedQuerryHitsCounter) {
        console.log(`${el[0]} - ${el[1]}`)
    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)

solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']

)

solve([
    'test',
    'test', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']

)