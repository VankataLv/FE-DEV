function numMod(input) {
    let avg = findAvg(String(input));

    while (true) {
        if (avg > 5) {
            console.log(input)
            break
        }
        else {
            input = String(input);
            input += 9;
            input = Number(input)
        }
        avg = findAvg(String(input));
        // console.log(input)
    }

    function findAvg(numString) {
        let sum = 0;
        for (let i = 0; i <= numString.length - 1; i++) {
            sum += Number(numString[i])
        }
        return sum / numString.length
    }
}



numMod(101)
numMod(5835)