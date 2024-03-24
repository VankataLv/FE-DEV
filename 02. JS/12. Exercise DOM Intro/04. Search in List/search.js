function search() {
    const townListElement = document.getElementById('towns');
    const userSearchElement = document.getElementById('searchText').value;
    const resultElement = document.getElementById('result');
    let matchCount = 0;

    const townArr = Array.from(townListElement.children)
    for (const townElement of townArr) {
        if (townElement.textContent.toLowerCase().includes(userSearchElement.toLowerCase())) {
            townElement.style.textDecoration = "underline";
            townElement.style.fontWeight = "bold";
            matchCount += 1;
        }
    }
    resultElement.textContent = `${matchCount} matches found`
}
