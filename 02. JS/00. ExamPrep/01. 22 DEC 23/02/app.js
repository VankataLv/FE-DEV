window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');
    const placeInputElement = document.getElementById('place');
    const actionInputElement = document.getElementById('action');
    const personInputElement = document.getElementById('person');

    addButtonElement.addEventListener('click', (add) => {
        if (placeInputElement.value.trim() != "" &&
            actionInputElement.value.trim() != "" &&
            personInputElement.value.trim() != "") {

            let taskObj = {};
            taskObj.place = placeInputElement.value;
            taskObj.action = actionInputElement.value;
            taskObj.person = personInputElement.value;

            //clear old fields
            placeInputElement.value = "";
            actionInputElement.value = "";
            personInputElement.value = "";
            // DOM Fields
            let ulElement = document.getElementById('task-list')

            let liElement = document.createElement('li')
            liElement.classList.add('clean-task')

            let articleElement = document.createElement('article')

            let pPlaceElement = document.createElement('p')
            pPlaceElement.textContent = `Place: ${taskObj['place']}`
            articleElement.appendChild(pPlaceElement)

            let pActionElement = document.createElement('p')
            pActionElement.textContent = `Action: ${taskObj['action']}`
            articleElement.appendChild(pActionElement)

            let pPersonElement = document.createElement('p')
            pPersonElement.textContent = `Person: ${taskObj['person']}`
            articleElement.appendChild(pPersonElement)

            // Buttons
            let divElement = document.createElement('div')
            divElement.classList.add('buttons')

            let editBtnElement = document.createElement('button')
            editBtnElement.classList.add('edit')
            editBtnElement.textContent = 'Edit'
            editBtnElement.enabled = true
            divElement.appendChild(editBtnElement)

            let doneBtnElement = document.createElement('button')
            doneBtnElement.classList.add('done')
            doneBtnElement.textContent = 'Done'
            doneBtnElement.enabled = true
            divElement.appendChild(doneBtnElement)

            liElement.appendChild(articleElement)
            liElement.appendChild(divElement)
            ulElement.appendChild(liElement)

            // Edit Btn functionality
            editBtnElement.addEventListener('click', (edit) => {
                placeInputElement.value = taskObj['place'];
                actionInputElement.value = taskObj['action'];
                personInputElement.value = taskObj['person'];
                ulElement.removeChild(liElement)
            })

            // Done Btn Functionality
            doneBtnElement.addEventListener('click', (edit) => {
                ulElement.removeChild(liElement)

                let ulElementDoneTasks = document.getElementById('done-list')

                let liElementDoneTasks = document.createElement('li')

                let articleElementDoneTasks = document.createElement('article')

                let pPlaceElementDoneTasks = document.createElement('p')
                pPlaceElementDoneTasks.textContent = `Place: ${taskObj['place']}`
                articleElementDoneTasks.appendChild(pPlaceElementDoneTasks)

                let pActionElementDoneTasks = document.createElement('p')
                pActionElementDoneTasks.textContent = `Action: ${taskObj['action']}`
                articleElementDoneTasks.appendChild(pActionElementDoneTasks)

                let pPersonElementDoneTasks = document.createElement('p')
                pPersonElementDoneTasks.textContent = `Person: ${taskObj['person']}`
                articleElementDoneTasks.appendChild(pPersonElementDoneTasks)

                liElementDoneTasks.appendChild(articleElementDoneTasks)

                //Delete Btn
                let deletBtnElement = document.createElement('button')
                deletBtnElement.classList.add('delete')
                deletBtnElement.textContent = 'Delete'
                deletBtnElement.enabled = true
                liElementDoneTasks.appendChild(deletBtnElement)

                ulElementDoneTasks.appendChild(liElementDoneTasks)

                deletBtnElement.addEventListener('click', (del) => {
                    liElementDoneTasks.remove()
                })
            })
        }
    })
}