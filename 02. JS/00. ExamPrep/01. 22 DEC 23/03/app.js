const baseUrl = 'http://localhost:3030/jsonstore/gifts/';

const loadBtnEl = document.getElementById('load-presents');
const addBtnEl = document.getElementById('add-present');
const editBtnEl = document.getElementById('edit-present');

const divGiftListEl = document.getElementById('gift-list');
let currentPresentId = null;

const giftInputEl = document.getElementById('gift');
const forInputEl = document.getElementById('for');
const priceInputEl = document.getElementById('price');

//Load BTN func
const loadPresentsFunc = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(Object.values(data))

    divGiftListEl.innerHTML = "";
    editBtnEl.disabled = true;

    for (const presentObj of Object.values(data)) {

        //BTNs Container Create
        const divBtnsContainerEl = document.createElement('div');
        divBtnsContainerEl.classList.add('buttons-container');

        const changeBtnEl = document.createElement('button');
        changeBtnEl.classList.add('change-btn');
        changeBtnEl.textContent = "Change";
        //CHANGE BTN FUNC <------------------------------------
        changeBtnEl.addEventListener('click', () => {
            currentPresentId = presentObj._id;

            nameInputEl.value = presentObj.gift;
            numDaysInputEl.value = presentObj.for;
            fromDateInputEl.value = presentObj.price;

            editBtnEl.disabled = false;
            addBtnEl.disabled = true;

            divGiftSockEl.remove()
            console.log(`change for id ${presentObj._id} & name ${Object.values(presentObj)}`)
        })// end of changeBTN event listener
        divBtnsContainerEl.appendChild(changeBtnEl)
        const deleteBtnEl = document.createElement('button');
        deleteBtnEl.classList.add('delete-btn');
        deleteBtnEl.textContent = "Delete";
        divBtnsContainerEl.appendChild(deleteBtnEl)
        //DELETE BTN FUNC <------------------------------------
        deleteBtnEl.addEventListener('click', async () => {
            currentPresentId = presentObj._id;

            const response = await fetch(`${baseUrl}${currentPresentId}`, {
                method: 'DELETE'
            });

            divGiftSockEl.remove();
            currentPresentId = null;
            loadPresentsFunc();
        })
        //-------------

        //content div create
        const divContentEl = document.createElement('div');
        divContentEl.classList.add('content');

        const pGiftEl = document.createElement('p');
        pGiftEl.textContent = presentObj.gift;
        const pForEl = document.createElement('p');
        pForEl.textContent = presentObj.for;
        const pPriceEl = document.createElement('p');
        pPriceEl.textContent = presentObj.price;

        divContentEl.appendChild(pGiftEl)
        divContentEl.appendChild(pForEl)
        divContentEl.appendChild(pPriceEl)
        //-----
        const divGiftSockEl = document.createElement('div');
        divGiftSockEl.classList.add('gift-sock');

        divGiftSockEl.appendChild(divContentEl);
        divGiftSockEl.appendChild(divBtnsContainerEl);

        divGiftListEl.appendChild(divGiftSockEl)

    }//for cycle end
}
loadBtnEl.addEventListener('click', loadPresentsFunc);

//Add BTN Func
addBtnEl.addEventListener('click', async () => {

    if (nameInputEl.value == "" || numDaysInputEl.value == "" || fromDateInputEl.value == "") {
        return
    }

    const gift = nameInputEl.value;
    const forP = numDaysInputEl.value;
    const price = fromDateInputEl.value;

    const response = await fetch(baseUrl, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ gift: gift, for: forP, price: price, }),
    })

    if (!response.ok) {
        return;
    }
    clearInputFieldsFunc()

    loadPresentsFunc()
});

//Edit BTN Func
editBtnEl.addEventListener('click', async () => {
    const gift = nameInputEl.value;
    const forP = numDaysInputEl.value;
    const price = fromDateInputEl.value;

    const response = await fetch(`${baseUrl}${currentPresentId}`, {
        method: "PUT",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            _id: currentPresentId,
            gift: gift,
            for: forP,
            price: price,
        }),
    })

    if (!response.ok) {
        return;
    }
    editBtnEl.disabled = true;
    addBtnEl.disabled = false;
    clearInputFieldsFunc()
    loadPresentsFunc()
});

function clearInputFieldsFunc() {
    nameInputEl.value = "";
    numDaysInputEl.value = "";
    fromDateInputEl.value = "";
}