window.addEventListener("load", solve);

function solve() {
    const publishBtnElement = document.getElementById('form-btn');
    const firstNameElement = document.getElementById('first-name');
    const lastNameElement = document.getElementById('last-name');
    const ageElement = document.getElementById('age');
    const titleElement = document.getElementById('story-title');
    const genreElement = document.getElementById('genre');
    const storyElement = document.getElementById('story');
    let arrInfo = Array.from([firstNameElement, lastNameElement, ageElement, titleElement, genreElement, storyElement]);
    let storyObj = {};

    // Get the info and create the object -------------
    publishBtnElement.addEventListener('click', (publish) => {

        if (checkFieldContent(arrInfo)) {
            storyObj.firstName = firstNameElement.value;
            storyObj.lastName = lastNameElement.value;
            storyObj.age = ageElement.value;
            storyObj.title = titleElement.value;
            storyObj.genre = genreElement.value;
            storyObj.storyText = storyElement.value;
        }
        // clear input fields
        for (el of arrInfo) {
            el.value = "";
        }
        // Disable publish button
        publishBtnElement.disabled = true;

        // Create DOM elements
        const ulElement = document.getElementById("preview-list")
        const liElement = document.createElement("li")
        liElement.classList.add('story-info')

        let article = document.createElement("article");

        let h4 = document.createElement("h4");
        h4.textContent = `Name: ${storyObj['firstName']} ${storyObj['lastName']}`
        article.appendChild(h4)

        let pAge = document.createElement("p");
        pAge.textContent = `Age: ${storyObj['age']}`
        article.appendChild(pAge)

        let pTitle = document.createElement("p");
        pTitle.textContent = `Title: ${storyObj['title']}`
        article.appendChild(pTitle)

        let pGenre = document.createElement("p");
        pGenre.textContent = `Genre: ${storyObj['genre']}`
        article.appendChild(pGenre)

        let pText = document.createElement("p");
        pText.textContent = `${storyObj['storyText']}`
        article.appendChild(pText)

        liElement.appendChild(article)

        // Create the Buttons and append them
        const saveBtnElement = document.createElement("button")
        const editBtnElement = document.createElement("button")
        const deleteBtnElement = document.createElement("button")

        saveBtnElement.classList.add('save-btn')
        editBtnElement.classList.add('edit-btn')
        deleteBtnElement.classList.add('delete-btn')

        saveBtnElement.textContent = 'Save Story'
        editBtnElement.textContent = 'Edit Story'
        deleteBtnElement.textContent = 'Delete Story'

        saveBtnElement.enabled = true
        editBtnElement.enabled = true
        deleteBtnElement.enabled = true

        liElement.appendChild(saveBtnElement)
        liElement.appendChild(editBtnElement)
        liElement.appendChild(deleteBtnElement)

        ulElement.appendChild(liElement)
    })
    // Functionality off buttons
    editBtnElement = document.querySelector('.edit-btn')
    // Edit BTN
    editBtnElement.addEventListener('click', (edit) => {
        saveBtnElement.disabled = true
        editBtnElement.disabled = true
        deleteBtnElement.disabled = true
        publishBtnElement.enabled = true

        firstNameElement.value = storyObj.firstName;
        lastNameElement.value = storyObj.lastName;
        ageElement.value = storyObj.age;
        titleElement.value = storyObj.title;
        genreElement.value = storyObj.genre;
        storyElement.value = storyObj.storyText;

        ulElement.appendChild(liElement)
    })

    // Check Contents of the fields
    function checkFieldContent(arr) {
        for (let el of arr) {
            if (el.value.trim().length === 0) {
                return false
            }
        }
        return true
    }

}



