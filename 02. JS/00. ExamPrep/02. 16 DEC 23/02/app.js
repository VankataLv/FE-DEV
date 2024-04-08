window.addEventListener("load", solve);

function solve() {
    const addBtnElement = document.getElementById('add-btn');
    const expenseInputElement = document.getElementById('expense');
    const amountInputElement = document.getElementById('amount');
    const dateInputElement = document.getElementById('date');

    addBtnElement.addEventListener('click', (addBtn) => {
        // Add Btn Logic

        if (expenseInputElement.value.trim() != "" &&
            amountInputElement.value.trim() != "" &&
            dateInputElement.value.trim() != "") {

            let expenseObj = {};
            expenseObj.type = expenseInputElement.value;
            expenseObj.amount = amountInputElement.value;
            expenseObj.date = dateInputElement.value;

            expenseInputElement.value = "";
            amountInputElement.value = "";
            dateInputElement.value = "";
            addBtnElement.disabled = true;

            //create the new element

            // Article
            let ulPreviewListElement = document.getElementById('preview-list');
            let liElementPreviewList = document.createElement('li');
            liElementPreviewList.classList.add("expense-item");

            let articleElementPreviewList = document.createElement('article');

            let pTypeElement = document.createElement('p');
            pTypeElement.textContent = `Type: ${expenseObj['type']}`;
            articleElementPreviewList.appendChild(pTypeElement);

            let pAmountElement = document.createElement('p');
            pAmountElement.textContent = `Amount: ${expenseObj['amount']}$`;
            articleElementPreviewList.appendChild(pAmountElement);

            let pDateElement = document.createElement('p');
            pDateElement.textContent = `Date: ${expenseObj['date']}`;
            articleElementPreviewList.appendChild(pDateElement);

            liElementPreviewList.appendChild(articleElementPreviewList);
            // Div with Btns

            let divElementPreviewList = document.createElement('div');
            liElementPreviewList.classList.add("buttons");

            let editBtnElement = document.createElement('button');
            editBtnElement.classList.add('btn');
            editBtnElement.classList.add('edit');
            editBtnElement.textContent = "edit"
            editBtnElement.enabled = true

            divElementPreviewList.appendChild(editBtnElement)

            let okBtnElement = document.createElement('button');
            okBtnElement.classList.add("btn");
            okBtnElement.classList.add("ok");
            okBtnElement.textContent = "ok"
            okBtnElement.enabled = true


            divElementPreviewList.appendChild(okBtnElement)

            liElementPreviewList.appendChild(divElementPreviewList);

            ulPreviewListElement.appendChild(liElementPreviewList)


            editBtnElement.addEventListener('click', (editBtn) => {
                addBtnElement.disabled = false;

                expenseInputElement.value = expenseObj["type"];
                amountInputElement.value = expenseObj["amount"];
                dateInputElement.value = expenseObj["date"];

                liElementPreviewList.removeChild(articleElementPreviewList)
                liElementPreviewList.removeChild(divElementPreviewList)
                ulPreviewListElement.removeChild(liElementPreviewList)
            })
            okBtnElement.addEventListener('click', (okBtn) => {
                addBtnElement.disabled = false;

                liElementPreviewList.removeChild(articleElementPreviewList)
                liElementPreviewList.removeChild(divElementPreviewList)
                ulPreviewListElement.removeChild(liElementPreviewList)

                let liElementExpenceList = document.createElement('li');
                liElementExpenceList.classList.add('expense-item')

                let articleElementExpensesList = document.createElement('article');

                let pTypeElementExpence = document.createElement('p');
                pTypeElementExpence.textContent = `Type: ${expenseObj['type']}`;
                articleElementExpensesList.appendChild(pTypeElementExpence);

                let pAmountElementExpence = document.createElement('p');
                pAmountElementExpence.textContent = `Type: ${expenseObj['amount']}`;
                articleElementExpensesList.appendChild(pAmountElementExpence);

                let pDateElementExpence = document.createElement('p');
                pDateElementExpence.textContent = `Type: ${expenseObj['date']}`;
                articleElementExpensesList.appendChild(pDateElementExpence);

                liElementExpenceList.appendChild(articleElementExpensesList)

                let ulElementExpenceList = document.getElementById('expenses-list');
                ulElementExpenceList.appendChild(liElementExpenceList)

                let deleteBtnElement = document.querySelector('.delete')

                deleteBtnElement.addEventListener('click', (deleBtn) => { location.reload() })
            })
        }
    })
}
