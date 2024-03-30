function create(words) {
   for (el of words) {
      const parentDivElement = document.getElementById('content');
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');

      pElement.textContent = el;
      pElement.style.display = 'none';

      divElement.addEventListener("click", () => {
         pElement.style.display = "block";
      })

      divElement.appendChild(pElement)
      parentDivElement.appendChild(divElement)
   }
}

