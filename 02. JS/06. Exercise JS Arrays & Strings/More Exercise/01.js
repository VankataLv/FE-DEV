function login(inputArr) {
    let userName = inputArr[0];
    let passwordAttempt = "";
    for (let attempt = 1; attempt <= 4; attempt++) {
        passwordAttempt = inputArr[attempt];
        if (passwordAttempt == userName.split("").reverse().join("")) {
            return `User ${userName} logged in.`
        }
        else {
            if (attempt == 4) {
                return `User ${userName} blocked!`
            }
            else {
                console.log("Incorrect password. Try again.")
            }
        }
    }

}

login(['Acer', 'login', 'go', 'let me in', 'recA'])
// login(['momo','omom'])
// login(['sunny','rainy','cloudy','sunny','not sunny'])