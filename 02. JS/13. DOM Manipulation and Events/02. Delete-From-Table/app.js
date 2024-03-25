function deleteByEmail() {
    const inputFieldElement = document.querySelector('input[name=email]');
    const resultFieldElement = document.getElementById('result');
    const tableSecondColumn = document.querySelectorAll('table#customers tbody tr td:nth-child(2')
    let successfylDeletion = false;

    for (td of tableSecondColumn) {
        if (td.textContent == inputFieldElement.value) {
            let rowToBeDeleted = td.parentNode;
            rowToBeDeleted.parentNode.removeChild(rowToBeDeleted);
            successfylDeletion = true
        }
    }
    if (successfylDeletion) {
        resultFieldElement.textContent = "Deleted.";
    }
    else {
        resultFieldElement.textContent = "Not Found.";
    }

    inputFieldElement.value = "";
}

// function deleteByEmail() {
//     let email = document.getElementsByName("email")[0].value;
//     let secondColumn = document.querySelectorAll("#customers tr td:nth-child(2)");
//     for (let td of secondColumn)
//     if (td.textContent == email) {
//     let row = td.parentNode;
//     row.parentNode.removeChild(row);
//     document.getElementById('result').
//     textContent = "Deleted.";
//     return;
//     }
//     document.getElementById('result').textContent =
//    "Not found.";
//    }