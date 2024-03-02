function revealWords(wordsInput, template) {
    let wordsInputArr = wordsInput.split(', ')
    let templateArr = template.split(' ')

    for (let word of wordsInputArr) {
        for (let i = 0; i < templateArr.length; i++) {
            if (word.length == templateArr[i].length) {
                // console.log(`I have replaced ${templateArr[i]} with ${word}`)
                templateArr[i] = word
                break
            }
        }
    }
    // console.log(wordsInputArr)
    // console.log(wordsInputArr.length)
    // console.log(templateArr)
    // console.log(templateArr.length)
    console.log(templateArr.join(" "))
}
revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages')