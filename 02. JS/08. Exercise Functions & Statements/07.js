function nxnMatrix(num) {
    for (row = 1; row <= num; row++) {
        let column = ""
        for (col = 1; col <= num; col++) {
            column += num + " "

        }
        console.log(column)
    }
}

nxnMatrix(3)