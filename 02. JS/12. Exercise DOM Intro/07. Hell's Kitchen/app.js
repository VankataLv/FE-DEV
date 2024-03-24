function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        class Restaurant {
            constructor(name) {
                this.name = name;
                this.employeesList = [];
            }

            returnBestSalary() {
                let curHighestSalary = 0;
                for (let empObj of this.employeesList) {
                    if (curHighestSalary < empObj.salary) {
                        curHighestSalary = empObj.salary
                    }
                }
                return curHighestSalary.toFixed(2)
            }

            returnAverageSalary() {
                let employeeSize = this.employeesList.length
                let totalSalary = 0;
                for (let empObj of this.employeesList) {
                    totalSalary += empObj.salary
                }
                return (totalSalary / employeeSize).toFixed(2)
            }
        }

        class Worker {
            constructor(workerName, salary) {
                this.workerName = workerName;
                this.salary = Number(salary);
            }
        }

        function searchRestaurantByName(nameSearched) {
            for (let restaurantInstance of db) {
                if (restaurantInstance.name === nameSearched)
                    return restaurantInstance
            }
            return false
        }

        function searchWorkerByName(restObj, nameSearched) {
            for (let workerInstance of restObj.employeesList) {
                if (workerInstance.workerName == nameSearched) {
                    return workerInstance
                }
            }
            return false
        }

        const userInput = document.querySelector("textarea");
        let inputDataArr = Array.from(JSON.parse(userInput.value));
        let db = [];

        for (el of inputDataArr) {
            let [name, workersData] = el.split(" - ")

            let restaurantObj = searchRestaurantByName(name)
            if (!restaurantObj) {
                restaurantObj = new Restaurant(name)
                db.push(restaurantObj)
            }

            for (workerLine of workersData.split(", ")) {
                let [workerName, salary] = workerLine.split(" ");
                let workerObj = searchWorkerByName(restaurantObj, workerName);
                if (!workerObj) {
                    workerObj = new Worker(workerName, salary)
                }
                restaurantObj.employeesList.push(workerObj)
            }
            restaurantObj.employeesList.sort((a, b) => b.salary - a.salary);
        }


        let highestAvgSalary = 0;
        let bestRestaurantObj = "";
        for (let restObj of db) {

            if (restObj.returnAverageSalary() > highestAvgSalary) {
                bestRestaurantObj = restObj;
                highestAvgSalary = restObj.returnAverageSalary();
            }
        }

        const bestRestaurantElement = document.querySelector('#bestRestaurant p');
        bestRestaurantElement.textContent = `Name: ${bestRestaurantObj.name} Average Salary: ${highestAvgSalary} Best Salary: ${bestRestaurantObj.returnBestSalary()}`

        const bestRestaurantsWorkersElement = document.querySelector('#workers p');
        let output = [];
        for (let workObj of bestRestaurantObj.employeesList) {
            output.push(`Name: ${workObj.workerName} With Salary: ${workObj.salary}`)
        }

        bestRestaurantsWorkersElement.textContent = output.join(" ")
    }
}