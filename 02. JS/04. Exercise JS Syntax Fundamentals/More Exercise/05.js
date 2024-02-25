function dune(mine_yeild_start) {
    let cur_yield_left = Number(mine_yeild_start);
    let days_worked = 0;
    let storage = 0;

    while (cur_yield_left >= 100) {
        storage += cur_yield_left
        days_worked += 1;
        cur_yield_left -= 10;
        if (storage >= 26) {
            storage -= 26
        }
    }

    if (storage >= 26) {
        storage -= 26
    }

    console.log(days_worked)
    console.log(storage)
}

dune(111)
dune(450)