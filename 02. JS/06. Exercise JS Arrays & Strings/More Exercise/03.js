function pyramid(base, increment) {
    let height = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let curFloorBase = 0;
    let curFloorArea = 0;

    floors = Math.ceil(base / 2);
    height = Math.floor(Math.ceil((base / 2)) * increment);


    for (let curFloor = 1; curFloor <= floors; curFloor++) {
        curFloorBase = base - ((curFloor - 1) * 2);
        curFloorArea = curFloorBase ** 2;

        if (curFloor == floors) { // gold
            gold += curFloorArea * increment;
        }

        else if (curFloor % 5 == 0) { //lapis
            lapis += (curFloorArea - ((curFloorBase - 2) ** 2)) * increment;
            stone += (curFloorArea - (curFloorArea - ((curFloorBase - 2) ** 2))) * increment;
        }

        else {
            marble += (curFloorArea - ((curFloorBase - 2) ** 2)) * increment;
            stone += (curFloorArea - (curFloorArea - ((curFloorBase - 2) ** 2))) * increment;
        }
        // console.log(`floor: ${curFloor} | cur_base ${curFloorBase} | stone ${stone} | marble ${marble}| lapis ${lapis} | gold ${gold}`)
    }
    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(height)}`)

}

pyramid(11, 1)
pyramid(11, 0.75)
pyramid(12, 1)
pyramid(23, 0.5)