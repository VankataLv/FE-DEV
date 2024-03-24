// 83/100
function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const RowElementsArr = document.querySelectorAll('table.container tbody tr')
      const userSearchFieldElement = document.getElementById("searchField");
      const userSearch = userSearchFieldElement.value;
      //clear input field
      userSearchFieldElement.value = ''
      for (tableRowEl of RowElementsArr) {
         tableRowEl.classList.remove('select');
      }

      for (tableRowEl of RowElementsArr) {
         elText = tableRowEl.textContent;
         elText = elText.toLowerCase()

         let isSelected = false;

         if (elText == userSearch.toLowerCase() || elText.includes(userSearch)) {
            tableRowEl.classList.add("select");
            isSelected = true;
            continue;
         }
      }


   }
}

