function addressbook(arr) {
    let db = {};

    for (let line of arr) {
        let [name, address] = line.split(":")
        db[name] = address
    }

    let unsortedDb = Object.entries(db);
    let sortedDb = unsortedDb.sort((a, b) => {
        keyA = a[0];
        keyB = b[0];
    }
    );


    for (let key in sortedDb) {
        console.log(`${key} -> ${sortedDb[key]}`)
    }
}

addressbook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])