window.addEventListener("load", solve);

function solve() {
    const expenseInputEl = document.getElementById('expense');
    const amountInputEl = document.getElementById('amount');
    const dateInputEl = document.getElementById('date');
    const addBtnEl = document.getElementById('add-btn');

    const ulPreviewListEl = document.getElementById('preview-list');
    const ulExpenseListEl = document.getElementById('expenses-list');

    const deleteBtnEL = document.querySelector('.delete');

    addBtnEl.addEventListener('click', (addBtnEvent) => {
        addBtnEvent.preventDefault();
        if (!checkFilledInputs()) {
            return
        }

        obj = {
            expense: expenseInputEl.value,
            amount: amountInputEl.value,
            date: dateInputEl.value,
        }

        const liExpenseItemEl = document.createElement('li');
        liExpenseItemEl.className = 'expense-item';
        liExpenseItemEl.appendChild(createArticleElDOM(obj))


        const divBtnsEl = document.createElement('div');

        const editBtnEl = document.createElement('button');
        editBtnEl.classList.add('btn')
        editBtnEl.classList.add('edit')
        editBtnEl.textContent = 'edit'

        // Edit BTN FUNC
        editBtnEl.addEventListener('click', (editBtnEvent) => {
            expenseInputEl.value = obj.expense;
            amountInputEl.value = obj.amount;
            dateInputEl.value = obj.date;

            liExpenseItemEl.innerHTML = "";
            addBtnEl.disabled = false;
        })
        divBtnsEl.appendChild(editBtnEl)

        const okBtnEl = document.createElement('button');
        okBtnEl.classList.add('btn')
        okBtnEl.classList.add('ok')
        okBtnEl.textContent = 'ok'
        // Ok Btn Func
        okBtnEl.addEventListener('click', (okBtnEvent) => {
            liExpenseItemEl.innerHTML = ""

            const liAddedEl = document.createElement('li')
            liAddedEl.classList = "expense-item";
            liAddedEl.appendChild(createArticleElDOM(obj))
            ulExpenseListEl.appendChild(liAddedEl)
            addBtnEl.disabled = false
        })
        divBtnsEl.appendChild(okBtnEl)

        liExpenseItemEl.appendChild(divBtnsEl)
        ulPreviewListEl.appendChild(liExpenseItemEl)

        clearInputFields()
        addBtnEl.disabled = true
    })

    function checkFilledInputs() {
        if (expenseInputEl.value.trim() != '' &&
            amountInputEl.value.trim() != '' &&
            dateInputEl.value.trim() != '') {
            return true
        }
        return false
    }

    function createArticleElDOM(objGiven) {
        const articleEl = document.createElement('article');
        const pTypeEl = document.createElement('p');
        pTypeEl.textContent = `Type: ${objGiven.expense}`;
        const pAmountEl = document.createElement('p');
        pAmountEl.textContent = `Amount: ${objGiven.amount}$`;
        const pDateEl = document.createElement('p');
        pDateEl.textContent = `Date: ${objGiven.date}`;

        articleEl.appendChild(pTypeEl)
        articleEl.appendChild(pAmountEl)
        articleEl.appendChild(pDateEl)

        return articleEl
    }

    function clearInputFields() {
        expenseInputEl.value = "";
        amountInputEl.value = "";
        dateInputEl.value = "";
    }

    //Delete Btn Func
    deleteBtnEL.addEventListener('click', (deleteBtnEvent) => {
        location.reload();
    })
}