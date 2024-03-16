function solve(inputArr) {
    let db = [];

    for (let curFlight of inputArr[0]) {
        let [number, destination] = curFlight.split(" ")
        let flight = { number: number, destination: destination, status: "uknown" }
        db.push(flight)
    }

    for (let flightCancelled of inputArr[1]) {
        let [numberCancelled, statusChanged] = flightCancelled.split(" ")
        for (storedFlight of db) {
            if (numberCancelled == storedFlight.number) {
                storedFlight.status = statusChanged
            }
        }
    }

    let command = inputArr[2][0];
    if (command == 'Cancelled') {
        for (let flight of db) {
            if (flight.status == "Cancelled") {
                console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`)
            }
        }
    }
    else {
        for (let flight of db) {
            if (flight.status !== "Cancelled") {
                flight.status = 'Ready to fly';
                console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`)
            }
        }
    }
}

// solve([['WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
// ['DL2120 Cancelled',
//     'WN612 Cancelled',
//     'WN1173 Cancelled',
//     'SK430 Cancelled'],
// ['Cancelled']
// ])

solve([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
]
)
