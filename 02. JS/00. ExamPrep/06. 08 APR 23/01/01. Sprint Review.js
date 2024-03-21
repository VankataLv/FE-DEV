function solve(inputArr) {
    function indexEmployeeByName(searchedName) {
        for (el of team) {
            if (el == searchedName) {
                return team.indexOf(el)
            }
        }
    }

    let initialTaskCount = Number(inputArr.shift())
    let team = [];
    for (let i = 1; i <= initialTaskCount; i++) {
        let [employee, taskId, title, status, estimatedPoints] = inputArr.shift().split(":");
        if (!team.includes(employee)) {
            let employeeObj = { employee };
            employeeObj.tasks = [1, 2, 3];
            team.push(employeeObj)
        }

        let taskObj = { taskId };
        taskObj.title = title;
        taskObj.status = status;
        taskObj.estimatedPoints = Number(estimatedPoints);
        let objIndex = team[indexEmployeeByName(employee)]
        // team[objIndex].tasks.push(taskObj)
        team[objIndex][tasks].push(taskObj)

    }



    for (obj of team) {
        obj.tasks.push(5)
        console.log(obj.tasks)
    }
}

solve([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
])