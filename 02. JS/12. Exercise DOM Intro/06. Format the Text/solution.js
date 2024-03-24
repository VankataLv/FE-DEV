function solve() {
    const unformatedText = document.getElementById("input").value;
    let sentencesArr = unformatedText.split(".");
    sentencesArr = sentencesArr.map(el => el.trim());
    let emptySentence = false;
    let indexToRemove = NaN;
    let output = [];

    for (let sentence of sentencesArr) {
        if (sentence == "") {
            indexToRemove = sentencesArr.indexOf(sentence);
            emptySentence = true;
        }
    }

    if (emptySentence) {
        sentencesArr = removeEmptyStringEl(indexToRemove, sentencesArr)
    }

    let paragraphsNeeded = 0;
    if (sentencesArr.length & 3 == 0) {
        paragraphsNeeded = sentencesArr.length / 3
    }
    else {
        paragraphsNeeded = (Math.floor(sentencesArr.length / 3)) + 1
    }

    for (i = 0; i < paragraphsNeeded; i++) {
        output.push([])
    }
    let result = ""
    for (paragraph of output) {

        while (paragraph.length < 3) {
            if (sentencesArr.length == 0) {
                break;
            }
            paragraph.push(sentencesArr.shift())
        }
        if (paragraph.length == 0) {
            output.pop()
        }
        else {
            result += "<p>"
            for (elPara of paragraph) {
                result += `${elPara}.`
            }
            result += "</p>"
        }

    }


    document.getElementById("output").innerHTML = result

    function removeEmptyStringEl(index, arr) {
        if (emptySentence == true) {
            arr.splice(index, 1)
            return arr
        }
        return arr
    }


}

// first sentance. second sentance. third sentence. forth sentence. fifth sentence. sixth sentnece. seventh sentence.

// function solve() {
//     let text = document.getElementById("input").value.split(".").filter(e => e.length > 0)
//     let div = document.getElementById("output");
//     for (i = 0; i < text.length; i += 3) {
//         let output = [];
//         for (j = 0; j < 3; j++) {
//             if (text[i + j]) {
//                 output.push(text[i + j])
//             }
//         }
//         let res = output.join(". ") + "."
//         div.innerHTML += `<p>${res}</p>`
//     }
// }