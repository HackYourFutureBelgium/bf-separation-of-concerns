'use strict';

const ulEl = document.createElement('ul');
ulEl.innerHTML = `
  <li> toad </li>
  <li>Frog</li>
  <li>salad</li>
`;
console.log(ulEl.nodeName, ulEl.cloneNode(true));

// --- Fix the innerHTML to pass assertions ---
ulEl.children[0].innerHTML = 'toad'; // Trim spaces for the first <li>
ulEl.children[1].innerHTML = 'frog'; // Correct capitalization of 'Frog'
ulEl.children[2].innerHTML = 'salamander'; // Replace 'salad' with 'salamander'
// --- --- --- --- --- ---

console.log(ulEl.nodeName, ulEl.cloneNode(true));

const expectedInnerHTMLs = ['toad', 'frog', 'salamander'];
for (let i = 0; i < expectedInnerHTMLs.length; i++) {
  const actual = ulEl.children[i].innerHTML;
  const expected = expectedInnerHTMLs[i];
  console.assert(actual === expected, `Test child ${i}`);
}
