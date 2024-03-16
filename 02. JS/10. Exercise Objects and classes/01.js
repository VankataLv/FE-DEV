function employees(arr) {
    class Employee {
        constructor(employeeName, personalNum) {
            this.employeeName = employeeName
            this.personalNum = personalNum
        }

        employeeInfo() {
            console.log(`Name: ${this.employeeName} -- Personal Number: ${this.personalNum}`)
        }
    }

    let arrEmployeeObjects = [];

    for (let i = 0; i <= arr.length - 1; i++) {
        let curEmployeeName = arr[i];
        let lenEmployeeName = curEmployeeName.length;
        let employeeToBeAdded = new Employee(curEmployeeName, lenEmployeeName)
        arrEmployeeObjects.push(employeeToBeAdded)
    }

    for (let el of arrEmployeeObjects) {
        el.employeeInfo()
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)