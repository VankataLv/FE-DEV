function addItem() {
    const menuElement = document.getElementById('menu');
    const inputTextElement = document.getElementById('newItemText');
    const inputValueElement = document.getElementById('newItemValue');

    let newElement = document.createElement('option')
    newElement.value = inputValueElement.value;
    newElement.textContent = inputTextElement.value;
    menuElement.appendChild(newElement);


    inputTextElement.value = "";
    inputValueElement.value = "";
}
