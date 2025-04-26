'use strict';

const headerEl = document.createElement('h1');
console.log('initial header:', headerEl.cloneNode(true));

const changeHeaderTextHandler = (event) => {
  // Take input from the user
  const userInput = prompt('Enter new header text:');
  if (userInput !== null) {
    // Set it as the target's innerHTML
    event.target.innerHTML = userInput;
  }
};

headerEl.addEventListener('click', changeHeaderTextHandler);

// "click" the button once
const clickEvent1 = new Event('click');
headerEl.dispatchEvent(clickEvent1);
console.log('after 1st click:', headerEl.cloneNode(true));

// "click" the button again
const clickEvent2 = new Event('click');
headerEl.dispatchEvent(clickEvent2);
console.log('after 2nd click:', headerEl.cloneNode(true));
