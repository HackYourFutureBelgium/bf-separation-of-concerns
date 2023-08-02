'use strict';

const actual = (arrOfArrs) => {
  console.log(arrOfArrs);
  const tableEl = document.createElement('table');
  const tbodyEl = document.createElement('tbody');

  for (const arr of arrOfArrs) {
    const trEl = document.createElement('tr');

    for (const text of arr) {
      const tdEl = document.createElement('td');
      const namedItem = document.createTextNode(text);
      tdEl.appendChild(namedItem);
      trEl.appendChild(tdEl);
    }

    tbodyEl.appendChild(trEl);
  }

  tableEl.appendChild(tbodyEl);

  return tableEl;
};
