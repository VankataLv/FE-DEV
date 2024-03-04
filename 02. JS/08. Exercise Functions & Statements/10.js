function factDiv(a, b) {
    let factA = factorialize(a);
    let factB = factorialize(b);

    function factorialize(num) {
        if (num < 0)
            return -1;
        else if (num == 0)
            return 1;
        else {
            return (num * factorialize(num - 1));
        }
    }

    console.log((factA / factB).toFixed(2))
}

factDiv(5, 2)