function toggle() {
    const toggleButtonEl = document.querySelector('.head span.button');
    const elToReveal = document.getElementById('extra');

    const currentButtonText = toggleButtonEl.textContent;

    if (currentButtonText == "More") {
        toggleButtonEl.textContent = "Less";
        elToReveal.style.display = 'block';
    }
    else {
        toggleButtonEl.textContent = "More";
        elToReveal.style.display = 'none';
        elToReveal.style.background = "green"
    }
}

