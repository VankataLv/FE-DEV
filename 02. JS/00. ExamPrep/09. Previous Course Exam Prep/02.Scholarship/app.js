window.addEventListener("load", solve);

function solve() {
    const nameInputEl = document.getElementById('student');
    const universityInputEl = document.getElementById('university');
    const scoreInputEl = document.getElementById('score');
    const nextBtnEl = document.getElementById('next-btn');
    const ulPreviewEl = document.getElementById('preview-list');
    const ulCandidatesEl = document.getElementById('candidates-list');

    nextBtnEl.addEventListener('click', (next) => {
        if (nameInputEl.value.trim() !== "" &&
            universityInputEl.value.trim() !== "" &&
            scoreInputEl.value.trim() !== "") {

            nextBtnEl.disabled = true
            let liEl = document.createElement('li');
            liEl.classList.add('application');
            liEl.appendChild(createLiElFunc(
                nameInputEl.value,
                universityInputEl.value,
                scoreInputEl.value,
            ))

            let curObj = {
                name: nameInputEl.value,
                university: universityInputEl.value,
                score: scoreInputEl.value,
            }

            const editBtnEl = document.createElement('button');
            editBtnEl.classList.add('action-btn');
            editBtnEl.classList.add('edit');
            editBtnEl.textContent = 'edit';
            editBtnEl.addEventListener('click', (editBtn) => {
                nextBtnEl.disabled = false;

                nameInputEl.value = curObj.name;
                universityInputEl.value = curObj.university;
                scoreInputEl.value = curObj.score;

                ulPreviewEl.innerHTML = "";
            });
            liEl.appendChild(editBtnEl)

            const applyBtnEl = document.createElement('button');
            applyBtnEl.classList.add('action-btn');
            applyBtnEl.classList.add('apply');
            applyBtnEl.textContent = 'apply';
            applyBtnEl.addEventListener('click', (applyBtn) => {

                nextBtnEl.disabled = false;
                let licandidateEl = document.createElement('li');
                licandidateEl.classList.add('application');
                licandidateEl.appendChild(createLiElFunc(
                    curObj.name,
                    curObj.university,
                    curObj.score,
                ));

                ulCandidatesEl.appendChild(licandidateEl)
                ulPreviewEl.innerHTML = "";
            });
            liEl.appendChild(applyBtnEl)

            ulPreviewEl.appendChild(liEl);

            nameInputEl.value = "";
            universityInputEl.value = "";
            scoreInputEl.value = "";
        }
    })

    function createLiElFunc(name, university, score) {
        let articleEl = document.createElement('article');
        let h4El = document.createElement('h4');
        h4El.textContent = name
        let pUniversityEl = document.createElement('p');
        pUniversityEl.textContent = `University: ${university}`
        let pScoreEl = document.createElement('p');
        pScoreEl.textContent = `Score: ${score}`
        articleEl.appendChild(h4El)
        articleEl.appendChild(pUniversityEl)
        articleEl.appendChild(pScoreEl)
        return articleEl
    }

}
