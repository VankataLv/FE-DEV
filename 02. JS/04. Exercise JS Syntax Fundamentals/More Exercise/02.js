function wordsUppercase(originalString) {
    let result = ""
    let curChar = ""
    let curCode = 0

    for (let i = 0; i < originalString.length; i++) {
        curChar = originalString[i];
        curCode = curChar.charCodeAt();
        if (curChar == " ") {
            result += ", "
        }
        else {

            if (curCode >= 65 && curCode <= 122) {
                if (curCode >= 97 && curCode <= 122) {
                    curCode -= 32;
                    result += String.fromCharCode(curCode);
                }
                else {
                    result += curChar
                }
            }
            else {
                if (result != ",") {
                    result += curChar
                }
            }
        }
    }
    console.log(result)
}

// wordsUppercase('Hi, how are you?')
// wordsUppercase('Hello')
wordsUppercase('Functions in JS can be nested, i.e. hold other functions')