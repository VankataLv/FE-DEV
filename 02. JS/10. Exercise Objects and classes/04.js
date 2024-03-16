function solve(cmds) {
    let dbMovies = [];

    class Movie {
        constructor(name) {
            this.name = name
            this.director = ""
            this.date = ""

        }

        addDate(date) {
            this.date = date
        }

        addDirector(director) {
            this.director = director
        }
    }

    for (let line of cmds) {
        let [cmd, ...rest] = line.split(" ")

        if (cmd == "addMovie") {
            dbMovies.push(new Movie(rest.join(" ")))
        }
        else {
            if (line.includes("directedBy")) {
                line = line.replace("directedBy", "");
                for (let object of dbMovies) {
                    if (line.includes(object.name)) {
                        line = line.replace(object.name, "");
                        line = line.trim()
                        // console.log(`This is how the line looks like: ${line}`)
                        object.addDirector(line)
                    }
                }
            }
            else if (line.includes("onDate")) {
                line = line.replace("onDate", "");
                for (let object of dbMovies) {
                    if (line.includes(object.name)) {
                        line = line.replace(object.name, "");
                        line = line.trim()
                        // console.log(`This is how the line looks like: ${line}`)
                        object.addDate(line)
                    }
                }
            }
        }
    }

    // printing part
    for (let object of dbMovies) {
        if (object.director && object.date) {
            let output = JSON.stringify(object);
            console.log(output)
        }
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]
)