const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

const loadBtnEl = document.getElementById('load-course');
const addBtnEl = document.getElementById('add-course');
const editBtnFormEl = document.getElementById('edit-course');

const divListEl = document.getElementById('list');
let currentCourseId = null;

const nameInputEl = document.getElementById('course-name');
const typeInputEl = document.getElementById('course-type');
const descriptionInputEl = document.getElementById('description');
const teacherInputEl = document.getElementById('teacher-name');

//Load BTN func
const loadCourcesFunc = async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(Object.values(data))

    divListEl.innerHTML = "";
    editBtnFormEl.disabled = true;

    for (const courseObj of Object.values(data)) {

        const editBtnCourseEl = document.createElement('button');
        editBtnCourseEl.classList.add('edit-btn');
        editBtnCourseEl.textContent = "Edit Course";
        //Edit BTN FUNC <------------------------------------
        editBtnCourseEl.addEventListener('click', (editEvent) => {
            editEvent.preventDefault()
            currentCourseId = courseObj._id;

            nameInputEl.value = courseObj.title;
            typeInputEl.value = courseObj.type;
            descriptionInputEl.value = courseObj.description;
            teacherInputEl.value = courseObj.teacher;

            editBtnFormEl.disabled = false;
            addBtnEl.disabled = true;

            divContainerEl.remove()
            console.log(`change for id ${courseObj._id} & name ${Object.values(courseObj)}`)
        })// end of changeBTN event listener

        const finishBtnEl = document.createElement('button');
        finishBtnEl.classList.add('finish-btn');
        finishBtnEl.textContent = "Finish Course";
        //Finish BTN FUNC <------------------------------------
        finishBtnEl.addEventListener('click', async () => {
            currentCourseId = courseObj._id;

            const response = await fetch(`${baseUrl}${currentCourseId}`, {
                method: 'DELETE'
            });

            divContainerEl.remove();
            currentCourseId = null;
            loadCourcesFunc();
        })
        // //-------------

        //content div create
        const divContainerEl = document.createElement('div');
        divContainerEl.classList.add('container');

        const h2NameEl = document.createElement('h2');
        h2NameEl.textContent = courseObj.title;
        const h3TeacherEl = document.createElement('h3');
        h3TeacherEl.textContent = courseObj.teacher;
        const h3TypeEl = document.createElement('h3');
        h3TypeEl.textContent = courseObj.type;
        const h4descriptionEl = document.createElement('h4');
        h4descriptionEl.textContent = courseObj.desctiption;

        divContainerEl.appendChild(h2NameEl)
        divContainerEl.appendChild(h3TeacherEl)
        divContainerEl.appendChild(h3TypeEl)
        divContainerEl.appendChild(h4descriptionEl)

        divContainerEl.appendChild(editBtnCourseEl)
        divContainerEl.appendChild(finishBtnEl)
        //-----

        divListEl.appendChild(divContainerEl)

    }//for cycle end
}
loadBtnEl.addEventListener('click', loadCourcesFunc);

//Add BTN Func
addBtnEl.addEventListener('click', async (addEvent) => {
    addEvent.preventDefault()
    if (nameInputEl.value == "" || typeInputEl.value == "" || descriptionInputEl.value == "" || teacherInputEl.value == "") {
        return
    }

    const title = nameInputEl.value;
    const type = typeInputEl.value;
    const description = descriptionInputEl.value;
    const teacher = teacherInputEl.value;

    const response = await fetch(baseUrl, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ title: title, type: type, description: description, teacher: teacher }),
    })

    if (!response.ok) {
        return;
    }
    clearInputFieldsFunc()

    loadCourcesFunc()
});

//Edit BTN Form Func
editBtnFormEl.addEventListener('click', async (editFormBtnEvent) => {
    editFormBtnEvent.preventDefault()
    const title = nameInputEl.value;
    const type = typeInputEl.value;
    const description = descriptionInputEl.value;
    const teacher = teacherInputEl.value;

    const response = await fetch(`${baseUrl}${currentCourseId}`, {
        method: "PUT",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            _id: currentCourseId,
            title: title,
            type: type,
            description: description,
            teacher: teacher,
        }),
    })

    if (!response.ok) {
        return;
    }
    editBtnFormEl.disabled = true;
    addBtnEl.disabled = false;
    clearInputFieldsFunc()
    loadCourcesFunc()
});

function clearInputFieldsFunc() {
    nameInputEl.value = "";
    typeInputEl.value = "";
    descriptionInputEl.value = "";
    teacherInputEl.value = "";
}