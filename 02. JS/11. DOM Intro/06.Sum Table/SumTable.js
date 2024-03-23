function sumTable() {
    let table = document.querySelectorAll('table tr');
    let total = 0;

    for (let i = 1; i < table.length - 1; i++) {
        let row = table[i].children
        let cost = Number(row[1].textContent)
        total += cost
    }

    document.getElementById('sum').textContent = total;
}