function solve(objectBase, arr) {
    for (line of arr) {
        if (line == "Clear History and Cache") {
            objectBase["Open Tabs"] = [];
            objectBase["Recently Closed"] = [];
            objectBase["Browser Logs"] = [];
        }
        else {
            let [cmd, site] = line.split(" ");
            if (cmd == "Open") {
                objectBase["Open Tabs"].push(site)
                objectBase["Browser Logs"].push(line)
            }
            else if (cmd == "Close") {
                if (objectBase["Open Tabs"].includes(site)) {
                    objectBase["Open Tabs"].pop(site)
                    objectBase["Recently Closed"].push(site)
                    objectBase["Browser Logs"].push(line)
                }
            }
        }
    }

    console.log(objectBase["Browser Name"])
    console.log(`Open Tabs: ${objectBase["Open Tabs"].join(", ")}`)
    console.log(`Recently Closed: ${objectBase["Recently Closed"].join(", ")}`)
    console.log(`Browser Logs: ${objectBase["Browser Logs"].join(", ")}`)
}

solve({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
)