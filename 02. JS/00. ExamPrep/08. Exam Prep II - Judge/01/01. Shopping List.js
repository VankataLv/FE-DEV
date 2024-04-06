function solve(inputArr) {
    let shoppingList = inputArr.shift().split("!")

    for (let line of inputArr) {
        if (line == "Go Shopping!") {
            console.log(shoppingList.join(", "))
        } else {
            let [cmd, firstToken, secondToken] = line.split(" ")
            if (cmd == "Urgent") {
                if (!shoppingList.includes(firstToken)) {
                    shoppingList.unshift(firstToken)
                }
            } else if (cmd == "Unnecessary") {
                if (shoppingList.includes(firstToken)) {
                    let indexToRemove = shoppingList.indexOf(firstToken);

                    shoppingList.splice(indexToRemove, 1)
                }
            } else if (cmd == "Correct") {
                if (shoppingList.includes(firstToken)) {
                    let indexToChange = shoppingList.indexOf(firstToken);
                    shoppingList[indexToChange] = secondToken
                }
            } else if (cmd == "Rearrange") {
                if (shoppingList.includes(firstToken)) {
                    let indexToRearange = shoppingList.indexOf(firstToken);
                    let elToRearange = shoppingList[indexToRearange]
                    shoppingList.splice(indexToRearange, 1)
                    shoppingList.push(elToRearange)
                }

            }
        }
    }
}

solve((["Milk!Pepper!Water!Banana!Grapes",
    // "Urgent Salt",
    // "Unnecessary Grapes",
    // "Correct Pepper Onion",
    "Rearrange Banana",
    // "Correct Tomatoes Potatoes",
    "Go Shopping!"])
)