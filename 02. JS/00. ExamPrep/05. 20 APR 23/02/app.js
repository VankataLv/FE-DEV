window.addEventListener("load", solve);

function solve() {
    const titleInputEl = document.getElementById('task-title');
    const catInputEl = document.getElementById('task-category');
    const titleTextAreaEl = document.getElementById('task-content');

    const publishBtnEl = document.getElementById('publish-btn');

    const ulReviewListEl = document.getElementById('review-list');
    const ulPublishedListEL = document.getElementById('published-list');

    publishBtnEl.addEventListener('click', (publishEvent) => {
        publishEvent.preventDefault()

        if (titleInputEl.value == "" ||
            catInputEl.value == "" ||
            titleTextAreaEl.value == "") {
            return
        }
        let dataObj = {
            title: titleInputEl.value,
            category: catInputEl.value,
            content: titleTextAreaEl.value,
        }
        const liRPostEl = document.createElement('li')
        liRPostEl.classList.add('rpost')
        liRPostEl.appendChild(createArticleEl(dataObj))

        const editBtnEl = document.createElement('button');
        editBtnEl.classList.add('action-btn');
        editBtnEl.classList.add('edit');
        editBtnEl.textContent = 'Edit';
        liRPostEl.appendChild(editBtnEl);
        editBtnEl.addEventListener('click', () => {

            titleInputEl.value = dataObj.title;
            catInputEl.value = dataObj.category;
            titleTextAreaEl.value = dataObj.content;

            liRPostEl.remove()
        })


        const postBtnEl = document.createElement('button');
        postBtnEl.classList.add('action-btn');
        postBtnEl.classList.add('post');
        postBtnEl.textContent = 'Post';
        liRPostEl.appendChild(postBtnEl);
        postBtnEl.addEventListener('click', () => {

            liRPostEl.remove()
            const liNewEl = document.createElement('li')
            liNewEl.classList.add('rpost')

            liNewEl.appendChild(createArticleEl(dataObj))
            ulPublishedListEL.appendChild(liNewEl)

        })

        ulReviewListEl.appendChild(liRPostEl)
        clearInputFields()
    })

    function clearInputFields() {
        titleInputEl.value = "";
        catInputEl.value = "";
        titleTextAreaEl.value = "";
    }
    function createArticleEl(dataObj) {
        const articleEl = document.createElement('article');

        const h4NameEl = document.createElement('h4');
        h4NameEl.textContent = dataObj.title;
        articleEl.appendChild(h4NameEl);

        const pCatEl = document.createElement('p');
        pCatEl.textContent = `Category: ${dataObj.category}`;
        articleEl.appendChild(pCatEl);

        const pContentEl = document.createElement('p');
        pContentEl.textContent = `Content: ${dataObj.content}`;
        articleEl.appendChild(pContentEl);

        return articleEl
    }

}