function solve(text) {
    let regexp = /[A-Z][a-z]*/g;
    let matches = [...text.matchAll(regexp)];

    console.log(matches.join(", "))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
solve('HoldTheDoor')
solve('ThisIsSoAnnoyingToDo')