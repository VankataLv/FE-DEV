function inventory(arr) {
    let heroDB = [];

    for (let line of arr) {
        let [name, level, items] = line.split(" / ")
        let curHero = {
            name: name,
            level: Number(level),
            items: items.split(", "),
            printData: function () {
                console.log(`Hero: ${this.name}\nlevel => ${this.level}\nitems => ${this.items.join(", ")}`)
            }
        }
        heroDB.push(curHero);
    }
    heroDB.sort((a, b) => (a.level - b.level));
    // let sortedByName = heroDB.sort((a, b) => (a.name > b.name) ? 1 : -1);
    // let sortedByName1 = heroDB.sort((a, b) => (a.name > b.name) ? 1 : 0);

    for (let hero of heroDB) {
        hero.printData()
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
]
)