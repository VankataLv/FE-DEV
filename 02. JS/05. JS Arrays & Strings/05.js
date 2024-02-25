function censor(text, word) {

    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }

    console.log(text);
}

censor('A small sentence with some words', 'small')
censor('Find the hidden word', 'hidden')