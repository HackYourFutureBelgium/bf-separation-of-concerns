'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <p></p>
  <section></section>
  <h1></h1>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  replace the <p>
const newEl = document.createElement('h2');
const oldP = divEl.querySelector('p');
divEl.replaceChild(newEl, oldP);
//  insert something before the <section>
const newNav = document.createElement('nav');
divEl.prepend(newNav);
//  remove the <h1>
const oldH1 = divEl.querySelector('h1');
divEl.removeChild(oldH1);
//  append something to the end
const newP = document.createElement('p');
divEl.appendChild(newP);
// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

console.assert(divEl.childElementCount === 4, 'Test: .childElementCount');

console.assert(divEl.children[0].nodeName === 'NAV', 'Test: 1st child');
console.assert(divEl.children[1].nodeName === 'H2', 'Test: 2nd child');
console.assert(divEl.children[2].nodeName === 'SECTION', 'Test: 3rd child');
console.assert(divEl.children[3].nodeName === 'P', 'Test: 4th child');
