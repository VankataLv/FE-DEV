const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

const loadBtnEl = document.getElementById('load-history');
const editBtnEl = document.getElementById('edit-weather');
const addBtnEl = document.getElementById('add-weather');

const divListEl = document.getElementById('list');

let curWeatherId = null;

const locationInputEl = document.getElementById('location');
const temperatureInputEl = document.getElementById('temperature');
const dateInputEl = document.getElementById('date');

//Load BTN
const loadWeatherFunc = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(Object.values(data))

    divListEl.innerHTML = "";
    editBtnEl.disabled = true;

    for (const weatherObj of Object.values(data)) {
        const divContainerEl = document.createElement('div');
        divContainerEl.classList.add('container');

        const h2LocationEl = document.createElement('h2');
        h2LocationEl.textContent = weatherObj.location;
        divContainerEl.appendChild(h2LocationEl);

        const h3dateEl = document.createElement('h3');
        h3dateEl.textContent = weatherObj.date;
        divContainerEl.appendChild(h3dateEl);

        const h3temperatureEl = document.createElement('h3');
        h3temperatureEl.id = 'celsius';
        h3temperatureEl.textContent = weatherObj.temperature;
        divContainerEl.appendChild(h3temperatureEl);

        const divButtonsContainerEl = document.createElement('div');
        divButtonsContainerEl.classList.add('buttons-container');

        const changeBtnEl = document.createElement('button');
        changeBtnEl.classList.add('change-btn');
        changeBtnEl.textContent = 'Change';
        divButtonsContainerEl.appendChild(changeBtnEl);
        //Change BTN Func
        changeBtnEl.addEventListener('click', async () => {
            curWeatherId = weatherObj._id;

            locationInputEl.value = weatherObj.location;
            temperatureInputEl.value = weatherObj.temperature;
            dateInputEl.value = weatherObj.date;

            editBtnEl.disabled = false;
            addBtnEl.disabled = true;

            divContainerEl.remove()
            console.log(`change for id ${weatherObj._id} & name ${Object.values(weatherObj)}`)
        })

        const deleteBtnEl = document.createElement('button');
        deleteBtnEl.classList.add('delete-btn');
        deleteBtnEl.textContent = 'Delete';
        divButtonsContainerEl.appendChild(deleteBtnEl);
        // Delete BTN FUNC
        deleteBtnEl.addEventListener('click', async () => {
            curWeatherId = weatherObj._id;

            const response = await fetch(`${baseUrl}${curWeatherId}`, {
                method: 'DELETE'
            });

            divContainerEl.remove();
            curWeatherId = null;
            loadWeatherFunc();
        })

        divContainerEl.appendChild(divButtonsContainerEl)
        divListEl.appendChild(divContainerEl)
    } //for cycle end
} // Load end

loadBtnEl.addEventListener('click', loadWeatherFunc);

//Add BTN Func
addBtnEl.addEventListener('click', async () => {

    if (locationInputEl.value == "" || temperatureInputEl.value == "" || dateInputEl.value == "") {
        return
    }

    const loc = locationInputEl.value;
    const temp = temperatureInputEl.value;
    const dateVar = dateInputEl.value;

    const response = await fetch(baseUrl, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ location: loc, temperature: temp, date: dateVar, }),
    })

    if (!response.ok) {
        return;
    }
    clearInputFieldsFunc()

    loadWeatherFunc()
});

//Edit BTN Func
editBtnEl.addEventListener('click', async () => {
    const loc = locationInputEl.value;
    const temp = temperatureInputEl.value;
    const dateVar = dateInputEl.value;

    const response = await fetch(`${baseUrl}${curWeatherId}`, {
        method: "PUT",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            _id: curWeatherId,
            location: loc,
            temperature: temp,
            date: dateVar,
        }),
    })

    if (!response.ok) {
        return;
    }
    editBtnEl.disabled = true;
    addBtnEl.disabled = false;
    clearInputFieldsFunc()
    loadWeatherFunc()
});

function clearInputFieldsFunc() {
    locationInputEl.value = "";
    temperatureInputEl.value = "";
    dateInputEl.value = "";
}