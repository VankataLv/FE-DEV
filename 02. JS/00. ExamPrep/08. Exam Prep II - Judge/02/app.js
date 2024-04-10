window.addEventListener('load', solve);

function solve() {
    const divAllHitsContainerEl = document.querySelector('.all-hits-container');
    const divSavedContainerEl = document.querySelector('.saved-container');

    const genreInputEl = document.getElementById('genre');
    const nameInputEl = document.getElementById('name');
    const authorInputEl = document.getElementById('author');
    const dateInputEl = document.getElementById('date');
    const addBtnEl = document.getElementById('add-btn');

    addBtnEl.addEventListener('click', (addBtnEvent) => {
        addBtnEvent.preventDefault();

        if (genreInputEl.value == "" ||
            nameInputEl.value == "" ||
            authorInputEl.value == "" ||
            dateInputEl.value == "") {
            return
        };

        const divHitsInfoEl = document.createElement('div');
        divHitsInfoEl.classList.add('hits-info');

        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', './static/img/img.png')
        divHitsInfoEl.appendChild(imgEl);

        const h2GenreEl = document.createElement('h2');
        h2GenreEl.textContent = `Genre: ${genreInputEl.value}`;
        divHitsInfoEl.appendChild(h2GenreEl);

        const h2NameEl = document.createElement('h2');
        h2NameEl.textContent = `Name: ${nameInputEl.value}`;
        divHitsInfoEl.appendChild(h2NameEl);

        const h2AuthorEl = document.createElement('h2');
        h2AuthorEl.textContent = `Author: ${authorInputEl.value}`;
        divHitsInfoEl.appendChild(h2AuthorEl);

        const h3DateEl = document.createElement('h3');
        h3DateEl.textContent = `Date: ${dateInputEl.value}`;
        divHitsInfoEl.appendChild(h3DateEl);

        const saveBtnEl = document.createElement('button');
        saveBtnEl.classList.add('save-btn');
        saveBtnEl.textContent = 'Save song';
        divHitsInfoEl.appendChild(saveBtnEl);

        const likeBtnEl = document.createElement('button');
        likeBtnEl.classList.add('like-btn');
        likeBtnEl.textContent = 'Like song';
        divHitsInfoEl.appendChild(likeBtnEl);

        const deleteBtnEl = document.createElement('button');
        deleteBtnEl.classList.add('delete-btn');
        deleteBtnEl.textContent = 'Delete';
        divHitsInfoEl.appendChild(deleteBtnEl);

        divAllHitsContainerEl.appendChild(divHitsInfoEl);

        genreInputEl.value = "";
        nameInputEl.value = "";
        authorInputEl.value = "";
        dateInputEl.value = "";

        //LIKE BTN
        likeBtnEl.addEventListener('click', (likeBtnEvent) => {
            const likesParaEl = document.querySelector('.likes p');
            let dataArr = likesParaEl.textContent.split(" ");
            dataArr[2] = Number(dataArr[2]) + 1;
            let newDataStr = dataArr.join(" ");
            likesParaEl.textContent = newDataStr;
            likeBtnEl.disabled = true;
        })
        // SAVE BTN
        saveBtnEl.addEventListener('click', (saveBtnEvent) => {
            let newDivHitsInfoEl = divHitsInfoEl;
            divHitsInfoEl.remove();

            newDivHitsInfoEl.removeChild(likeBtnEl)
            newDivHitsInfoEl.removeChild(saveBtnEl)

            divSavedContainerEl.appendChild(newDivHitsInfoEl)
        })
        // DELETE BTN
        deleteBtnEl.addEventListener('click', (deleteBtnEvent) => {
            divHitsInfoEl.remove();
        })
    })
}