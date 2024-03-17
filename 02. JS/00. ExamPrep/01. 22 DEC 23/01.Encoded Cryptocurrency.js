function solve(inputArr) {
    let msgArr = inputArr.shift().split("");

    for (let el of inputArr) {
        if ((el == "Buy")) {
            console.log(`The cryptocurrency is: ${msgArr.join("")}`)
        }
        else if (el == "TakeEven") {
            let newMsgArr = [];
            for (let i = 0; i < msgArr.length; i += 2) {
                newMsgArr.push(msgArr[i])
            }
            msgArr = newMsgArr;
            console.log(msgArr.join(""))
        }
        else {
            let info = el.split("?");
            let cmd = info[0];
            if (cmd == "ChangeAll") {
                let msgStr = msgArr.join("");
                msgStr = msgStr.replace(new RegExp(info[1], "g"), info[2])
                msgArr = msgStr.split("")
                console.log(msgArr.join(""))
            }
            else {
                if (cmd == "Reverse") {
                    let msgStr = msgArr.join("");
                    if (msgStr.includes(info[1])) {
                        msgStr = msgStr.replace(info[1], "")
                        let rvsrdInfo = info[1].split("");
                        rvsrdInfo = rvsrdInfo.reverse();
                        rvsrdInfo = rvsrdInfo.join("");
                        msgStr += rvsrdInfo
                        msgArr = msgStr.split("")
                        console.log(msgArr.join(""))
                    }
                    else {
                        console.log("error")
                    }
                }
            }
        }
    }

}
solve(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"])
