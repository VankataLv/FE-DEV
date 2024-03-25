function addItem() {
    const inputElement = document.getElementById('newItemText');
    const itemListElement = document.getElementById('items');

    //Create new item
    const newItemElement = document.createElement('li')
    // Add text content
    newItemElement.textContent = inputElement.value;
    // Append to DOM
    itemListElement.appendChild(newItemElement)
    // Clear input Element
    inputElement.value = "";
}