function palindromeInts(arr) {
    for (el of arr) {
        el = el.toString()
        if (el == el.split("").reverse().join("")) {
            console.log("true")
        }
        else {
            console.log("false")
        }
    }
}

palindromeInts([123, 323, 421, 121])
palindromeInts([32, 2, 232, 1010])