function loadingBar(num) {
    function barVizualizer(loadPercentage) {
        let bar = "";
        let loaded = loadPercentage / 10;
        bar = "[" + "%".repeat(loaded) + ".".repeat(10 - loaded) + "]";
        return `${bar}`
    }
    if (num == 100) {
        console.log(`100% Complete! ${barVizualizer(num)}`)
    }
    else {
        console.log(`${num}% ${barVizualizer(num)}`)
        console.log(`Still loading...`)
    }

}

loadingBar(50)
loadingBar(10)
loadingBar(100)