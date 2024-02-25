// function revArr(n, originalArray) {
//     let reversedArray = [];

//     reversedArray = originalArray.slice(0, n)
//     reversedArray.reverse()
//     console.log(reversedArray.join(" "))
// }

function revArr(n, originalArray) {
    let reversedArray = [];
    for (let i = 0; i < n; i++) {
        reversedArray.push(originalArray[i])
    }
    reversedArray.reverse()
    console.log(reversedArray.join(" "))


}
revArr(3, [10, 20, 30, 40, 50])
revArr(4, [-1, 20, 99, 5])
revArr(2, [66, 43, 75, 89, 47])
