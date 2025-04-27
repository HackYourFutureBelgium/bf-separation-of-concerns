import { setupListeners } from './listener.js';


// Set up the event listeners when the DOM is loaded
//document.addEventListener('DOMContentLoaded', setupListeners);


export function init() {
  // Initialize the application
  document.addEventListener('DOMContentLoaded', setupListeners);
  // Any other initialization code can go here
}