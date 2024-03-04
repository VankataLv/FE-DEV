function perfectNum(perfectNumCand) {
    divisors = [];
    let sum = 0;

    for (let num = 1; num < perfectNumCand; num++) {
        if (perfectNumCand % num == 0) {
            divisors.push(num);
        }
    }

    for (el of divisors) {
        sum += el
    }

    if (perfectNumCand == sum) {
        console.log("We have a perfect number!")
    }
    else {
        console.log("It's not so perfect.")
    }

}
perfectNum(6)
perfectNum(28)
perfectNum(1236498)