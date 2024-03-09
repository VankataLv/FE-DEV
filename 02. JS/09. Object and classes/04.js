function solve(firstNameInput, lastNameInput, hairColorInput) {
    let person = { name: firstNameInput, lastName: lastNameInput, hairColor: hairColorInput }
    console.log(JSON.stringify(person))
}

function convertJSON(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    };
    console.log(JSON.stringify(person));
}

solve('George', 'Jones', 'Brown')
convertJSON('George', 'Jones', 'Brown')