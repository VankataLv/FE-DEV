function oddOccurances(inputString) {
    let sentenceArr = inputString.split(" ");
    let querryHitsCounter = {};

    for (let word of sentenceArr) {
        word = word.toLowerCase()

        if (querryHitsCounter.hasOwnProperty(word)) {
            querryHitsCounter[word] += 1
        }
        else {
            querryHitsCounter[word] = 1
        }
    }

    let result = [];

    for (let el in querryHitsCounter) {
        if (querryHitsCounter[el] % 2 != 0) {
            result.push(el)
        }
    }

    console.log(result.join(" "))
}

oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurances('Cake IS SWEET is Soft CAKE sweet Food')