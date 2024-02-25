function wordSearch(text, query) {
    let words = text.split(" ");
    let hits = 0;

    for (let word of words) {
        if (word == query) {
            hits += 1
        }
    }
    console.log(hits)
}

wordSearch('This is a word and it also is a sentence', 'is')
wordSearch('softuni is great place for learning new programming languages', 'softuni')