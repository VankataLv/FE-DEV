function arrRotation(originalArr, rotations) {
    let new_array = originalArr.map(item => item);

    for (let i = 0; i < rotations; i++) {
        new_array.push(new_array.shift());
    }
    console.log(new_array.join(" "))
}
arrRotation([51, 47, 32, 61, 21], 2)
arrRotation([32, 21, 61, 1], 4)
arrRotation([2, 4, 15, 31], 5)