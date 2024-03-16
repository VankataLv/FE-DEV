function solve(inputArr) {
    let db = [];

    for (let line of inputArr) {
        let [name, grade, avgScore] = line.split(", ");
        name = name.split(": ")[1]
        grade = Number(grade.split(": ")[1]);
        avgScore = Number(avgScore.split(": ")[1]);

        if (avgScore >= 3.0) {
            grade += 1;
            if (!db.hasOwnProperty(grade)) {
                db[grade] = {};
                db[grade].students = [];
                db[grade].avgScore = 0;
            }

            db[grade].students.push(name)
            db[grade].avgScore += avgScore
        }
    }

    for (let grade of Object.entries(db)) {
        console.log(`${grade[0]} Grade`)
        console.log(`List of students: ${grade[1].students.join(", ")}`)
        console.log(`Average annual score from last year: ${(grade[1].avgScore / grade[1].students.length).toFixed(2)}`)
        console.log()
    }

}

solve([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]
)