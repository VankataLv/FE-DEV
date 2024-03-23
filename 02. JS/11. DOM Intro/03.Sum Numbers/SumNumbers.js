// function calc() {
//     const firstInputElement = document.getElementById('num1');
//     const seconfInputElement = document.querySelector('#num2');
//     const sumInputElement = document.getElementById('sum');

//     const firstNum = Number(firstInputElement.value);
//     const secondNum = Number(seconfInputElement.value);
//     const sum = firstNum + secondNum;

//     sumInputElement.value = sum

// }

function calc() {
    const firstNum = Number(document.getElementById('num1').value);
    const secondNum = Number(document.getElementById('num2').value);

    document.getElementById("sum").value = firstNum + secondNum
}
