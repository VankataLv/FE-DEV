function addItem() {
    const inputElement = document.getElementById('newItemText');
    const itemListElement = document.getElementById('items');

    const newItemToInput = document.createElement('li');
    newItemToInput.textContent = inputElement.value;

    // deleteLinkElement
    const deleteLinkElement = document.createElement('a');
    deleteLinkElement.textContent = "[Delete]"
    deleteLinkElement.href = '#'

    //Add event to link element
    deleteLinkElement.addEventListener(`click`, () => {
        newItemToInput.remove();
    })

    //Append deleteElement to newItemElement
    newItemToInput.appendChild(deleteLinkElement)

    //Append new item element to list
    itemListElement.appendChild(newItemToInput);

    //clear input
    inputElement.value = "";
}