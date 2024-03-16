function towns(arrRows) {
    class Town {
        constructor(name, lat, long) {
            this.town = name
            this.latitude = lat
            this.longitude = long
        }
    }
    let arrTowns = [];
    for (let el of arrRows) {
        let [nameEl, latEl, longEl] = el.split(" | ");
        latEl = Number(latEl);
        latEl = latEl.toFixed(2);
        longEl = Number(longEl);
        longEl = longEl.toFixed(2);
        let town = new Town(nameEl, latEl, longEl);
        arrTowns.push(town)
    }

    for (let town of arrTowns) {
        let output = JSON.stringify(town)
        console.log(output)
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)