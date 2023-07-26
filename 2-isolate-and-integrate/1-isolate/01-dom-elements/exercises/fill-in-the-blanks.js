'use strict';

/* Scavenger Hunt!

  practice reading through all the element properties in the debugger
  many of the answers are there if you look in the right place ;)

*/
debugger;
const input_1_element = document.createElement('input');
const _1_test = input_1_element.nodeName === 'INPUT';
console.assert(_1_test, 'Test 1');

const input_2_element = document.createElement('iNPuT');
const _2_test = input_2_element.nodeName === 'INPUT';
console.assert(_2_test, 'Test 2');

const a_3_element = document.createElement('article');
const _3_test = a_3_element.nodeName === 'ARTICLE';
console.assert(_3_test, 'Test 3');

const p_4_element = document.createElement('p');
p_4_element.innerHTML = 'party palace';
const _4_test = p_4_element.innerHTML === 'party palace';
console.assert(_4_test, 'Test 4');

const p_5_element = document.createElement('p');
p_5_element.className = 'wide-border';
const _5_test = p_5_element.className === 'wide-border';
console.assert(_5_test, 'Test 5');

const textarea_6_element = document.createElement('textarea');
textarea_6_element.innerText = 'many many mumbling mice';
const _6_test = textarea_6_element.value === 'many many mumbling mice';
console.assert(_6_test, 'Test 6');
