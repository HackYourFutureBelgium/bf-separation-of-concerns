'use strict';

const ulEl = document.createElement('ul');
ulEl.innerHTML = `
  <li> toad </li>
  <li>Frog</li>
  <li>salad</li>
`;
console.log(ulEl.nodeName, ulEl.cloneNode(true));

// --- write some code ---
ulEl.children[0].innerHTML = 'toad';
ulEl.children[1].innerHTML = 'frog';
ulEl.lastElementChild.innerHTML = 'salamander';
// --- --- --- --- --- ---

console.log(ulEl.nodeName, ulEl.cloneNode(true));

const expectedInnerHTMLs = ['toad', 'frog', 'salamander'];
for (let i = 0; i < expectedInnerHTMLs.length; i++) {
    const actual = ulEl.children[i].innerHTML;
    const expected = expectedInnerHTMLs[i];
    console.log(actual === expected);
    console.log(`actual : ${actual} --> expected ${expected}`);
    console.assert(actual === expected, `Test child ${i}`);
}
