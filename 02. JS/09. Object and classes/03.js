function convertObject(jsonFormatObject) {
    let convertedObj = JSON.parse(jsonFormatObject)
    let entries = Object.entries(convertedObj)

    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }

}

convertObject('{"name": "George", "age": 40, "town": "Sofia"}')