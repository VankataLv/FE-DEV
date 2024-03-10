function solve(catsArr) {
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }

    }

    for (let el of catsArr) {
        let [elName, elAge] = el.split(" ")
        let cat = new Cat(elName, elAge)
        cat.meow()
    }
}

solve(['Mellow 2', 'Tom 5'])
solve(['Candy 1', 'Poppy 3', 'Nyx 2'])