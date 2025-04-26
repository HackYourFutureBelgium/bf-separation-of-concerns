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

const tbodyEl = divEl.querySelector('tbody');
// Add <td> elements to the first <tr>
const firstRow = tbodyEl.children[0];
firstRow.appendChild(document.createElement('td')).innerHTML = 'a'; // First row, first column
firstRow.appendChild(document.createElement('td')).innerHTML = 'b'; // First row, second column

// Add <td> elements to the second <tr>
const secondRow = tbodyEl.children[1];
secondRow.appendChild(document.createElement('td')).innerHTML = 'c'; // Second row, first column
secondRow.appendChild(document.createElement('td')).innerHTML = 'd'; // Second row, second column
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
