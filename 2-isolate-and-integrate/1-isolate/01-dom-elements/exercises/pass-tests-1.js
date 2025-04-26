'use strict';

const element = document.createElement('input'); // Create an input element
element.nodeName === 'INPUT'; // Test 1: Verify the nodeName

element.placeholder = 'enter your username'; // Set the placeholder property
element.className = 'auth-field'; // Set the className property

// the assertions are correct!  write code above to pass them
console.assert(element.nodeName === 'INPUT', 'Test 1: nodeName');
console.assert(
    element.placeholder === 'enter your username',
    'Test 2: placeholder',
);
console.assert(element.className === 'auth-field', 'Test 3: className');
