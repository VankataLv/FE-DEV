function solve() {
    const textElement = document.getElementById('text');
    const conventionElement = document.getElementById('naming-convention');
    const resultElement = document.getElementById('result');

    let text = textElement.value;
    const convention = conventionElement.value;
    text = text.toLowerCase();
    result = []

    if (convention == "Camel Case") {
        textArr = text.split(" ")
        result.push(textArr[0])
        for (let i = 1; i < textArr.length; i++) {
            const firstLetter = textArr[i].charAt(0);
            const firstLetterCapped = firstLetter.toUpperCase();
            const remainingLetters = textArr[i].slice(1)
            const cappedWord = firstLetterCapped + remainingLetters
            result.push(cappedWord)
        }
    }
    else if (convention == "Pascal Case") {
        textArr = text.split(" ")
        for (let i = 0; i < textArr.length; i++) {
            const firstLetter = textArr[i].charAt(0);
            const firstLetterCapped = firstLetter.toUpperCase();
            const remainingLetters = textArr[i].slice(1)
            const cappedWord = firstLetterCapped + remainingLetters
            result.push(cappedWord)
        }
    }
    else {
        result.push("Error!");
    }
    resultElement.textContent = result.join("")
}