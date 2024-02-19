function areaCircle(input) {
    let typeAtribute;
    typeAtribute = typeof (input);
    if (typeAtribute != "number") {
        console.log(`We can not calculate the circle area, because we receive a ${typeAtribute}.`)
    }
    else {
        area = Math.PI * (input ** 2)
        console.log(area.toFixed(2))
    }
}

areaCircle(5)
areaCircle("name")