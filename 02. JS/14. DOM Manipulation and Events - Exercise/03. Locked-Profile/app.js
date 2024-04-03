function lockedProfile() {
    const profileElementsAll = document.querySelectorAll('.profile');

    for (const profileELement of profileElementsAll) {
        const showmoreButtonElement = profileELement.querySelector('button');
        const lockRadioElement = profileELement.querySelector('input[value=lock]');

        showmoreButtonElement.addEventListener('click', (e) => {
            if (lockRadioElement.checked) {
                return
            }

            const additionalInfoElement = showmoreButtonElement.previousElementSibling;

            if (showmoreButtonElement.textContent == "Show more") {
                additionalInfoElement.style.display = 'block';
                showmoreButtonElement.textContent = "Hide it";
            }
            else {
                additionalInfoElement.style.display = 'none';
                showmoreButtonElement.textContent = "Show more";
            }
        })
    }

}