'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr></tr>
      <tr></tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  you want to create a 2x2 table with a, b, c, d in the squares
const tableValue = ['a', 'b', 'c', 'd'];
const tableEl = divEl.querySelector('table');
const tbodyEl = tableEl.querySelector('tbody');

for (let i = 0; i < 2; i++) {
    const trEl = document.createElement('tr');
    for (let j = 0; j < 2; j++) {
        const tdEl = document.createElement('td');
        const value = tableValue.shift();

        tdEl.textContent = value;
        trEl.appendChild(tdEl);
    }
    tbodyEl.appendChild(trEl);
}

const tr = divEl.querySelectorAll('tr');
tr[0].remove();
tr[1].remove();
// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        const tbodyEL = divEl.children[0].children[0];
        const trEl = tbodyEL.children[i];
        const tdEl = trEl.children[j];
        const actual = tdEl.innerHTML;
        const expected = expectedInnerHTMLs.shift();
        console.assert(actual === expected, `expected "${expected}"`);
    }
}
