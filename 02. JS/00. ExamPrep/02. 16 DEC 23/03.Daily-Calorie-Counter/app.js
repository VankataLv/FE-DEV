const baseUrl = `http://localhost:3030/jsonstore/tasks/`;

const loadBtnEl = document.getElementById('load-meals');
const divListEl = document.getElementById('list');

const editBtnEl = document.getElementById('edit-meal');
const addBtnEl = document.getElementById('add-meal');

const foodInputEl = document.getElementById('food');
const timeInputEl = document.getElementById('time');
const caloriesInputEl = document.getElementById('calories');

//GLOBAL VAR set every time the change BTN is clicked
let currentMealId = null;

// Load Btn Function
const loadMealsFunc = async () => {
    // Fetch all meals
    const response = await fetch(baseUrl);
    const data = await response.json();
    // console.log(Object.values(data))

    //clear meals container
    divListEl.innerHTML = "";

    // Deactivate Edit BTN
    editBtnEl.disabled = true;

    // create meal El for each
    for (const mealObj of Object.values(data)) {
        const changeBtnEl = document.createElement('button');
        changeBtnEl.classList.add('change-meal');
        changeBtnEl.textContent = "Change";

        const deleteBtnEl = document.createElement('button');
        deleteBtnEl.classList.add('delete-meal');
        deleteBtnEl.textContent = "Delete";

        const divMealBtnsEL = document.createElement('div');
        divMealBtnsEL.id = 'meal-buttons';
        divMealBtnsEL.appendChild(changeBtnEl);
        divMealBtnsEL.appendChild(deleteBtnEl);

        const h2FoodEL = document.createElement('h2');
        h2FoodEL.textContent = mealObj.food;
        const h3TimeEL = document.createElement('h3');
        h3TimeEL.textContent = mealObj.time;
        const h3CaloriesEL = document.createElement('h3');
        h3CaloriesEL.textContent = mealObj.calories;

        const divMealEl = document.createElement('div');
        divMealEl.classList.add('meal');

        divMealEl.appendChild(h2FoodEL)
        divMealEl.appendChild(h3TimeEL)
        divMealEl.appendChild(h3CaloriesEL)
        divMealEl.appendChild(divMealBtnsEL)
        // Attach meal to DOM
        divListEl.appendChild(divMealEl)

        // Attach on Change BTN
        changeBtnEl.addEventListener('click', async () => {
            // SET the currentMealId
            currentMealId = mealObj._id
            console.log(`ID set to ${mealObj._id}`)
            console.log(mealObj)

            // populate input fields
            foodInputEl.value = mealObj.food;
            timeInputEl.value = mealObj.time;
            caloriesInputEl.value = mealObj.calories;

            // activate edit btn
            editBtnEl.disabled = false
            // deactivate add meal btn
            addBtnEl.disabled = true
            // remove from list
            divMealEl.remove();
        });
        // Attach on Delete BTN
        deleteBtnEl.addEventListener('click', async () => {
            //set ID
            currentMealId = mealObj._id
            // delete HTTP RQST
            const response = await fetch(`${baseUrl}${currentMealId}`, {
                method: 'DELETE'
            });
            //remove from List
            divMealEl.remove();
            // Id to null
            currentMealId = null;
            // fetch items again
            loadMealsFunc()
        })
    }
}
// Load Btn Functionality
loadBtnEl.addEventListener('click', loadMealsFunc);

// Add Btn Functionality
addBtnEl.addEventListener('click', async () => {
    // get input data
    const food = foodInputEl.value;
    const time = timeInputEl.value;
    const calories = caloriesInputEl.value;
    // Create post RQST
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ food, calories, time, }),
    })

    if (!response.ok) {
        return;
    }
    // clear input fields
    foodInputEl.value = "";
    timeInputEl.value = "";
    caloriesInputEl.value = "";

    // load all meals
    loadMealsFunc();

})

// Edit Btn Functionality
editBtnEl.addEventListener('click', async () => {
    //get data from inputs
    const food = foodInputEl.value;
    const time = timeInputEl.value;
    const calories = caloriesInputEl.value;

    //clear Input Data
    foodInputEl.value = "";
    timeInputEl.value = "";
    caloriesInputEl.value = "";

    //PUT RQST
    const response = await fetch(`${baseUrl}${currentMealId}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            _id: currentMealId,
            food: food,
            calories: calories,
            time: time,
        })
    });

    if (!response.ok) {
        return;
    }

    //Load meals
    loadMealsFunc()
    // deactivate edit BTN
    editBtnEl.disabled = true;
    //activate add BTN
    addBtnEl.disabled = false;
    // Clear currentMealID
    currentMealId = null;

})