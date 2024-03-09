function phoneBook(arr) {
    let phoneBook = {};
    for (let el of arr) {
        let tokens = el.split(' ');
        let name = tokens[0];
        let num = tokens[1];
        phoneBook[name] = num;
    }
    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`)
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])