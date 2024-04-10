window.addEventListener('load', solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');
    const genreInputFieldElement = document.getElementById('genre');
    const nameInputFieldElement = document.getElementById('name');
    const authorInputFieldElement = document.getElementById('author');
    const dateInputFieldElement = document.getElementById('date');

    addButtonElement.addEventListener('click', (addEvent) => {

        addEvent.preventDefault();

        if (genreInputFieldElement.value.trim() != "" &&
            nameInputFieldElement.value.trim() != "" &&
            authorInputFieldElement.value.trim() != "" &&
            dateInputFieldElement.value.trim() != "") {

            let songObj = {};
            songObj.genre = genreInputFieldElement.value;
            songObj.nameSong = nameInputFieldElement.value;
            songObj.author = authorInputFieldElement.value;
            songObj.date = dateInputFieldElement.value;

            genreInputFieldElement.textContent = "";
            nameInputFieldElement.textContent = "";
            authorInputFieldElement.textContent = "";
            dateInputFieldElement.textContent = "";

            let divElementAllHitsContainer = document.querySelector('.all-hits-container');

            let divElementHitsInfo = document.createElement("div");
            divElementHitsInfo.classList.add('hits-info');

            let imgElement = document.createElement("img");
            divElementHitsInfo.setAttribute('src', ".\static\img\img.png");
            divElementHitsInfo.appendChild(imgElement);

            let h2ElementGenre = document.createElement("h2");
            h2ElementGenre.textContent = `Genre: ${songObj['genre']}`
            divElementHitsInfo.appendChild(h2ElementGenre);

            let h2ElementName = document.createElement("h2");
            h2ElementName.textContent = `Name: ${songObj['nameSong']}`
            divElementHitsInfo.appendChild(h2ElementName);

            let h2ElementAuthor = document.createElement("h2");
            h2ElementAuthor.textContent = `Author: ${songObj['author']}`
            divElementHitsInfo.appendChild(h2ElementAuthor);

            let h2ElementDate = document.createElement("h2");
            h2ElementDate.textContent = `Date: ${songObj['date']}`
            divElementHitsInfo.appendChild(h2ElementDate);

            const saveBtnElement = document.createElement("button")
            const likeBtnElement = document.createElement("button")
            const deleteBtnElement = document.createElement("button")

            saveBtnElement.classList.add('save-btn')
            likeBtnElement.classList.add('like-btn')
            deleteBtnElement.classList.add('delete-btn')

            saveBtnElement.textContent = 'Save song'
            likeBtnElement.textContent = 'Like song'
            deleteBtnElement.textContent = 'Delete'

            saveBtnElement.enabled = true
            likeBtnElement.enabled = true
            deleteBtnElement.enabled = true

            divElementHitsInfo.appendChild(saveBtnElement)
            divElementHitsInfo.appendChild(likeBtnElement)
            divElementHitsInfo.appendChild(deleteBtnElement)

            divElementAllHitsContainer.appendChild(divElementHitsInfo)
        }
    })
}