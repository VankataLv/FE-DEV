function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient-box');
    const resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (event) => {
        const currentWidth = event.offsetX;
        const elementWidth = event.target.clientWidth;
        const progress = Math.floor((currentWidth / elementWidth) * 100);

        resultElement.textContent = `${progress}%`;
    })

}