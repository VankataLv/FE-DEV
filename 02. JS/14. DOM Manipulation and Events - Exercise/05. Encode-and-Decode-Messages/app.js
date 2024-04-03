function encodeAndDecodeMessages() {
    let [encodeArea, decodeArea] = document.querySelectorAll('#main div textarea');
    const [encodeButtonElement, decodeButtonElement] = document.querySelectorAll('#main div button');

    encodeButtonElement.addEventListener('click', () => {
        let text = encodeArea.value;
        let encodedText = ""
        for (char of text) {
            let newCharCode = char.charCodeAt(0) + 1;
            let newChar = String.fromCharCode(newCharCode);
            encodedText += newChar;
        }
        decodeArea.value = encodedText;
        encodeArea.value = "";
    })

    decodeButtonElement.addEventListener('click', () => {
        let text = decodeArea.value;
        let decodedText = "";
        for (char of text) {
            let newCharCode = char.charCodeAt(0) - 1;
            let newChar = String.fromCharCode(newCharCode);
            decodedText += newChar;
        }
        encodeArea.value = decodedText;
        decodeArea.value = "";
    })
}