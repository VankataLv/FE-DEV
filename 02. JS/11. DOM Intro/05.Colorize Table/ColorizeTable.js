function colorize() {
    const evenRowElementsArr = document.querySelectorAll('table tr:nth-child(2n)')

    for (el of evenRowElementsArr) {
        el.style.background = "teal";
    }
}