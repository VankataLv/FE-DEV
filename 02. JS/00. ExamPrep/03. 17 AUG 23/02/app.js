window.addEventListener("load", solve);

function solve() {
    const addBtnEl = document.getElementById('add-btn');
    const nameInputEl = document.getElementById('player');
    const scoreInputEl = document.getElementById('score');
    const roundInputEl = document.getElementById('round');

    addBtnEl.addEventListener('click', (add) => {
        if (nameInputEl.value.trim() != "" &&
            scoreInputEl.value.trim() != "" &&
            roundInputEl.value.trim() != "") {

            let resultObj = {};
            resultObj.playerName = nameInputEl.value;
            resultObj.score = scoreInputEl.value;
            resultObj.round = roundInputEl.value;

            addBtnEl.disabled = true;

            nameInputEl.value = '';
            scoreInputEl.value = '';
            roundInputEl.value = '';

            const ulSureListEl = document.getElementById('sure-list');

            let liSureListEl = document.createElement('li');
            liSureListEl.classList.add('dart-item')

            let articleSureListEl = document.createElement('article');

            let pNameSureListEl = document.createElement('p');
            pNameSureListEl.textContent = `${resultObj['playerName']}`;
            articleSureListEl.appendChild(pNameSureListEl)

            let pScoreSureListEl = document.createElement('p');
            pScoreSureListEl.textContent = `Score: ${resultObj['score']}`;
            articleSureListEl.appendChild(pScoreSureListEl)

            let pRoundSureListEl = document.createElement('p');
            pRoundSureListEl.textContent = `Round: ${resultObj['round']}`;
            articleSureListEl.appendChild(pRoundSureListEl)

            liSureListEl.appendChild(articleSureListEl);


            let editBtnEl = document.createElement('button');
            editBtnEl.classList.add('btn');
            editBtnEl.classList.add('edit');
            editBtnEl.textContent = 'edit';
            liSureListEl.appendChild(editBtnEl);

            let okBtnEl = document.createElement('button');
            okBtnEl.classList.add('btn');
            okBtnEl.classList.add('ok');
            okBtnEl.textContent = 'ok';
            liSureListEl.appendChild(okBtnEl);

            ulSureListEl.appendChild(liSureListEl);

            // Edit Btn functionality
            editBtnEl.addEventListener('click', (edit) => {
                addBtnEl.disabled = false;
                ulSureListEl.removeChild(liSureListEl);

                nameInputEl.value = resultObj['playerName'];
                scoreInputEl.value = resultObj['score'];
                roundInputEl.value = resultObj['round'];
            })

            // OK Btn functionality
            okBtnEl.addEventListener('click', (ok) => {
                ulSureListEl.removeChild(liSureListEl);
                addBtnEl.disabled = false;

                const ulScoreboardListEl = document.getElementById('scoreboard-list')
                ulScoreboardListEl.appendChild(articleSureListEl)
            })

            //Clear Btn Functionality
            const clearBtnEl = document.querySelector('.clear');
            clearBtnEl.addEventListener('click', (clear) => { location.reload() })
        }
    })
}
