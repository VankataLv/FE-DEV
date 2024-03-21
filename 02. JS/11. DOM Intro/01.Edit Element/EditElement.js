function editElement(ref, match, replacer) {
    const content = ref.textContent;
    const matcher = new RegExp(match, "g");
    const edited = content.replace(matcher, replacer);
    ref.textContent = edited
}

// function solve(element, match, replacer) {
//     while (element.textContent.includes(match)) {
//         element.textContent = element.textContent.replace(match, replacer)
//     }
// }