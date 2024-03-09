function meetings(arr) {
    let schedule = {}
    for (let appointment of arr) {
        let [weekday, name] = appointment.split(" ")
        if (schedule.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`)
        }
        else {
            schedule[weekday] = name
            console.log(`Scheduled for ${weekday}`)
        }
    }

    for (let key in schedule) {
        console.log(`${key} -> ${schedule[key]}`)
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])