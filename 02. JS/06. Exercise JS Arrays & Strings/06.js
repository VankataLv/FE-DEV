function solve(text) {
    let regexp = /#[A-Za-z]+/g;
    let matches = text.match(regexp);

    for (let el of matches) {
        console.log(el.replace("#", ""))
    }

}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')