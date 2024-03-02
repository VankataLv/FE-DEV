// function solve(word, text) {
//     if (text.toLowerCase().includes(word.toLowerCase())) {
//         console.log(word)
//     }
//     else {
//         console.log(`${word} not found!`)
//     }
// }

function solve(word, text) {
    const words = text.toLowerCase().split(' ');
    const isIncluded = words.includes(word.toLowerCase());

    if (isIncluded) {
        return word
    }
    else {
        return `${word} not found!`
    }
}

solve('javascript', 'JavaScript is the best programming language')
solve('python', 'JavaScript is the best programming language')
