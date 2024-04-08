// function attachEvents() {
//     const baseUrl = "http://localhost:3030/jsonstore/phonebook";

//     const ulPhonebookEl = document.getElementById('phonebook');
//     const loadBtnEl = document.getElementById('btnLoad');
//     const createBtnEl = document.getElementById('btnCreate');
//     const personInputFieldEl = document.getElementById('person');
//     const phoneInputFieldEl = document.getElementById('phone');

//     loadBtnEl.addEventListener('click', (loadBtnFunc));
//     createBtnEl.addEventListener('click', (createBtnFunc));

//     function loadBtnFunc() {
//         ulPhonebookEl.innerHTML = "";
//         fetch(baseUrl)
//             .then((response) => response.json())
//             .then((data) => {
//                 Object.values(data)
//                     .forEach(el => ulPhonebookEl.appendChild(createContactFunc(el)));
//             })
//     }
//     function createContactFunc(el) {
//         const liElement = document.createElement('li');
//         liElement.textContent = `${el.person}:${el.phone}`;
//         const deleteBtnEl = document.createElement('button');
//         deleteBtnEl.textContent = 'Delete';

//         deleteBtnEl.addEventListener('click', (deleteBtnFunc(el._id)))
//         liElement.appendChild(deleteBtnEl);
//         return liElement;
//     }

//     function createBtnFunc() {
//         const person = personInputFieldEl.value;
//         const phone = phoneInputFieldEl.value;
//         if (person.trim() != "" &&
//             phone.trim() != "") {


//             fetch(baseUrl, {
//                 method: 'POST',
//                 headers: { 'content-type': 'application/json' },
//                 body: JSON.stringify({ person, phone })

//             })
//                 .then(res => {
//                     let newContactObj = {
//                         person,
//                         phone,
//                     };
//                     personInputFieldEl.value = "";
//                     phoneInputFieldEl.value = "";
//                     // ulPhonebookEl.appendChild(createContactFunc(newContactObj));
//                     loadBtnFunc()
//                 })
//         }
//     }

//     function deleteBtnFunc(_id) {
//         fetch(`${baseUrl}/${_id}`, {
//             method: 'DELETE'
//         });

//     };
// }


// attachEvents();

function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/phonebook'

    let loadButton = document.getElementById('btnLoad')
    loadButton.addEventListener('click', loadPhonesEvent)

    let ulPhonebookElement = document.getElementById('phonebook')

    let createButton = document.getElementById('btnCreate')
    createButton.addEventListener('click', createNewPhoneEvent)

    async function loadPhonesEvent(event) {
        ulPhonebookElement.innerHTML = ''
        let phonesResponse = await fetch(baseURL)
        let phones = await phonesResponse.json()

        for (let phoneInfo of Object.entries(phones)) {
            let key = phoneInfo[0]
            let phoneObj = phoneInfo[1]

            let li = document.createElement('li')
            let deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete'
            deleteButton.addEventListener('click', deletePhoneEvent)

            li.textContent = `${phoneObj.person}: ${phoneObj.phone}`
            li.appendChild(deleteButton)
            ulPhonebookElement.appendChild(li)

            async function deletePhoneEvent(event) {
                fetch(baseURL + `/${phoneObj._id}`, {
                    method: 'DELETE'
                })

                li.remove()
            }
        }
    }

    async function createNewPhoneEvent(event) {
        let person = document.getElementById('person')
        let phone = document.getElementById('phone')

        let newPhone = {
            person: person.value,
            phone: phone.value
        }

        fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(newPhone)
        })

        person.value = ''
        phone.value = ''
        loadPhonesEvent()
    }
}

attachEvents();