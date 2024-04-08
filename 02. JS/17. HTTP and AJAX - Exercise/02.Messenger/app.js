// function attachEvents() {
//     const baseUrl = 'http://localhost:3030/jsonstore/messenger';
//     const sendBtnEl = document.getElementById('submit');
//     const refreshBtnEl = document.getElementById('refresh');
//     const nameInputAreaEl = document.getElementsByName('author')[0];
//     const msgInputAreaEl = document.getElementsByName('content')[0];
//     let textAreaEl = document.getElementById('messages');

//     sendBtnEl.addEventListener('click', sendBtnClickFunc)
//     refreshBtnEl.addEventListener('click', refreshBtnClickFunc)

//     function sendBtnClickFunc() {


//         let newMsgObj = {
//             aurhor: nameInputAreaEl.value,
//             msg: msgInputAreaEl.value,
//         }

//         fetch(baseUrl, {
//             method: 'post',
//             body: JSON.stringify(newMsgObj)
//         })
//         nameInputAreaEl.value = "";
//         msgInputAreaEl.value = "";
//     }

//     async function refreshBtnClickFunc() {
//         textAreaEl.textContent = "";

//         let msgList = await fetch(baseUrl)
//         let msgListObjs = await msgList.json()

//         let msgArr = []
//         for (let msgEl of Object.entries(msgListObjs)) {
//             let messageObj = msgEl[1]
//             msgArr.push(`${messageObj.author}: ${messageObj.content}`)
//         }
//         textAreaEl.textContent = msgArr.join("\n")
//     }
// }

// attachEvents();

function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/messenger'

    let sendButton = document.getElementById('submit')
    sendButton.addEventListener('click', sendMessageEvent)

    let refreshButton = document.getElementById('refresh')
    refreshButton.addEventListener('click', refreshEvent)

    let textareaResult = document.querySelector('textarea')

    function sendMessageEvent(event) {
        let author = document.getElementsByName('author')[0].value
        let content = document.getElementsByName('content')[0].value

        let message = {
            author,
            content
        }

        fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(message)
        })
    }

    async function refreshEvent(event) {
        textareaResult.textContent = ''

        let messagesResponse = await fetch(baseURL)
        let messages = await messagesResponse.json()

        let messagesArr = []
        for (let messageElement of Object.entries(messages)) {
            let messageObj = messageElement[1]
            messagesArr.push(`${messageObj.author}: ${messageObj.content}`)
        }

        textareaResult.textContent = messagesArr.join('\n')
    }
}

attachEvents();