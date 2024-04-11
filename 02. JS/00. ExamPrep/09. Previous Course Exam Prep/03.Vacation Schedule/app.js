const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

const loadBtnEl = document.getElementById('load-vacations');
const addBtnEl = document.getElementById('add-vacation');
const editBtnEl = document.getElementById('edit-vacation');

const divListEl = document.getElementById('list');
let currentVacationId = null;

const nameInputEl = document.getElementById('name');
const numDaysInputEl = document.getElementById('num-days');
const fromDateInputEl = document.getElementById('from-date');

//Load BTN Func
const loadVacationsFunc = async () => {
	const response = await fetch(baseUrl);
	const data = await response.json();
	console.log(Object.values(data))

	divListEl.innerHTML = "";
	editBtnEl.disabled = true;

	for (const vacationObj of Object.values(data)) {

		const changeBtnEl = document.createElement('button');
		changeBtnEl.classList.add('change-btn');
		changeBtnEl.textContent = "Change";
		// CHANGE BTN FUNC <------------------------------------
		changeBtnEl.addEventListener('click', () => {
			currentVacationId = vacationObj._id;

			nameInputEl.value = vacationObj.name;
			numDaysInputEl.value = vacationObj.days;
			fromDateInputEl.value = vacationObj.date;

			editBtnEl.disabled = false;
			addBtnEl.disabled = true;

			divContainerEl.remove();
			console.log(`change for id ${vacationObj._id} & name ${Object.values(vacationObj)}`)
		})// end of changeBTN event listener

		const donetnEl = document.createElement('button');
		donetnEl.classList.add('done-btn');
		donetnEl.textContent = "Done";

		//DONE BTN FUNC <------------------------------------
		donetnEl.addEventListener('click', async () => {
			currentVacationId = vacationObj._id;

			const response = await fetch(`${baseUrl}${currentVacationId}`, {
				method: 'DELETE'
			});

			divContainerEl.remove();
			currentVacationId = null;
			loadVacationsFunc();
		})
		//end of delete BTN -------------

		//content div create
		const divContainerEl = document.createElement('div');
		divContainerEl.classList.add('container');

		const h2NameEl = document.createElement('h2');
		h2NameEl.textContent = vacationObj.name;
		const h3DateEL = document.createElement('h3');
		h3DateEL.textContent = vacationObj.date;
		const h3DaysEl = document.createElement('h3');
		h3DaysEl.textContent = vacationObj.days;

		divContainerEl.appendChild(h2NameEl)
		divContainerEl.appendChild(h3DateEL)
		divContainerEl.appendChild(h3DaysEl)
		divContainerEl.appendChild(changeBtnEl)
		divContainerEl.appendChild(donetnEl)
		//-----
		divListEl.appendChild(divContainerEl)

	}//for cycle end
}
loadBtnEl.addEventListener('click', loadVacationsFunc);

//Add BTN Func
addBtnEl.addEventListener('click', async (e) => {
	e.preventDefault();

	if (nameInputEl.value == "" || numDaysInputEl.value == "" || fromDateInputEl.value == "") {
		return
	}

	const name = nameInputEl.value;
	const days = numDaysInputEl.value;
	const date = fromDateInputEl.value;

	const response = await fetch(baseUrl, {
		method: "POST",
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({ name: name, days: days, date: date, }),
	})

	if (!response.ok) {
		return;
	}
	clearInputFieldsFunc()

	loadVacationsFunc()
});

//Edit BTN Func
editBtnEl.addEventListener('click', async () => {
	const name = nameInputEl.value;
	const days = numDaysInputEl.value;
	const date = fromDateInputEl.value;

	const response = await fetch(`${baseUrl}${currentVacationId}`, {
		method: "PUT",
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({
			_id: currentVacationId,
			name: name,
			days: days,
			date: date,
		}),
	})

	if (!response.ok) {
		return;
	}
	editBtnEl.disabled = true;
	addBtnEl.disabled = false;
	clearInputFieldsFunc()
	loadVacationsFunc()
});

function clearInputFieldsFunc() {
	nameInputEl.value = "";
	numDaysInputEl.value = "";
	fromDateInputEl.value = "";
}