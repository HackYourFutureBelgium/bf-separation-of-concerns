'use strict';

const element = document.createElement ('p')
element.nodeName === 'INPUT'
element.innerHTML = 'lorem ipsum dolor'; // Set the innerHTML to 'lorem ipsum dolor'
element.className = 'fancy-text'; // Assign the class name 'fancy-text'


// the assertions are correct!  write code above to pass them
console.assert(element.nodeName === 'P', 'Test 1: nodeName');
console.assert(element.innerHTML === 'lorem ipsum dolor', 'Test 2: innerHTML');
console.assert(element.className === 'fancy-text', 'Test 3: className');
