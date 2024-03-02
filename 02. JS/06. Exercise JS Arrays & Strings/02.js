function nPrinting(arr, step) {
    let outputArr = [];
    for (let i = 0; i < arr.length; i += step) {
        outputArr.push(arr[i]);
    }

    return outputArr;
}

nPrinting(['5', '20', '31', '4', '20'], 2)
