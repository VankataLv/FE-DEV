function attachEventsListeners() {

    const daysButtonElement = document.getElementById('daysBtn')
    const daysInputElement = document.getElementById('days')

    const hoursButtonElement = document.getElementById('hoursBtn')
    const hoursInputElement = document.getElementById('hours')

    const minutesButtonElement = document.getElementById('minutesBtn')
    const minutesInputElement = document.getElementById('minutes')

    const secondsButtonElement = document.getElementById('secondsBtn')
    const secondsInputElement = document.getElementById('seconds')

    let timeData = {
        'days': 0,
        'hours': 0,
        'minutes': 0,
        'seconds': 0,

        calculate() {
            this.days = this.days
            this.hours = this.days * 24;
            this.minutes = this.hours * 60;
            this.seconds = this.minutes * 60;
        },
        displayResult() {
            daysInputElement.value = timeData.days;
            hoursInputElement.value = timeData.hours;
            minutesInputElement.value = timeData.minutes;
            secondsInputElement.value = timeData.seconds;
            console.log(timeData)
        }
    }

    daysButtonElement.addEventListener('click', (e) => {
        timeData.days = Number(daysInputElement.value)
        timeData.calculate()
        timeData.displayResult()
    });
    hoursButtonElement.addEventListener('click', (e) => {
        timeData.days = Number(hoursInputElement.value / 24)
        timeData.calculate()
        timeData.displayResult()
    });
    minutesButtonElement.addEventListener('click', (e) => {
        timeData.days = Number((minutesInputElement.value / 60) / 24)
        timeData.calculate()
        timeData.displayResult()
    });
    secondsButtonElement.addEventListener('click', (e) => {
        timeData.days = Number((secondsInputElement.value / 60 / 60) / 24)
        timeData.calculate()
        timeData.displayResult()
    });
}