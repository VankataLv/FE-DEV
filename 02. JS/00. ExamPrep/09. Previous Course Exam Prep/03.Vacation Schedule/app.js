const loadBtnEl = document.getElementById('load-vacations');
const baseUrl = 'http://localhost:3030/jsonstore/tasks/';
const divListEl = document.getElementById('list');

const addBtnEl = document.getElementById('add-vacation');
const nameInputFieldEl = document.getElementById('name');
const daysInputFieldEl = document.getElementById('num-days');
const dateInputFieldEl = document.getElementById('from-date');

const editBtnEl = document.getElementById('edit-vacation');

//Load button functionality
loadBtnEl.addEventListener('click', loadBtnFunc)

//Add button functionality
addBtnEl.addEventListener('click', (addBtnFunc) => {
	addBtnFunc.preventDefault();

	const newVacationObj = {
		name: nameInputFieldEl.value,
		days: daysInputFieldEl.value,
		date: dateInputFieldEl.value,
	};

	// POST RQST to server & GET
	fetch(baseUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newVacationObj)
	})
		.then(loadBtnFunc)

	nameInputFieldEl.value = "";
	daysInputFieldEl.value = "";
	dateInputFieldEl.value = "";
})


function loadBtnFunc() {
	fetch(baseUrl)
		.then(result => result.json())
		.then(dataArr => createVacationsList(Object.values(dataArr)))
}
function createVacationsList(arr) {
	divListEl.innerHTML = "";

	for (el of arr) {
		divListEl.appendChild(createVacationInstance(el))
	}
}

function createVacationInstance(vacationData) {
	const divContainerEl = document.createElement('div');
	divContainerEl.className = 'container';

	const h2NameEl = document.createElement('h2');
	h2NameEl.textContent = vacationData.name;

	const h3DateEl = document.createElement('h3');
	h3DateEl.textContent = vacationData.date;

	const h3DaysEl = document.createElement('h3');
	h3DaysEl.textContent = vacationData.days;

	const changeBtnEl = document.createElement('button');
	changeBtnEl.className = 'change-btn';
	changeBtnEl.textContent = 'Change';
	changeBtnEl.addEventListener('click', (changeBtnEvent) => {
		nameInputFieldEl.value = vacationData.name;
		daysInputFieldEl.value = vacationData.days;
		dateInputFieldEl.value = vacationData.date;

		divContainerEl.remove()

		addBtnEl.disabled = true
		editBtnEl.disabled = false
		editBtnEl.addEventListener('click', (editBtnEvent) => {
			editBtnEvent.preventDefault()

		})

	})

	const doneBtnEl = document.createElement('button');
	doneBtnEl.className = 'done-btn';
	doneBtnEl.textContent = 'Done';

	divContainerEl.appendChild(h2NameEl)
	divContainerEl.appendChild(h3DateEl)
	divContainerEl.appendChild(h3DaysEl)
	divContainerEl.appendChild(changeBtnEl)
	divContainerEl.appendChild(doneBtnEl)

	return divContainerEl
}
