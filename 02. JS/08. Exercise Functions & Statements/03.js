function charsRange(a, b) {

    let codeA = a.charCodeAt()
    let codeB = b.charCodeAt()
    let start = Math.min(codeA, codeB)
    let end = Math.max(codeA, codeB)
    let result = ""

    for (let i = start + 1; i < end; i++) {
        result += String.fromCharCode(i) + " ";
    }
    return result
}

console.log(charsRange('a', 'd'))