function addressbook(arr) {
    let db = {};

    for (let line of arr) {
        let [name, address] = line.split(":")
        db[name] = address
    }

    for (let key of Object.keys(db).sort()) {
        console.log(`${key} -> ${db[key]}`)
    }
}

addressbook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])