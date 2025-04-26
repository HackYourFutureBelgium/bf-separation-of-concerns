// src/listeners.js
import { handleFormSubmit } from './handler.js';

export const setupListeners = () => {
    const form = document.getElementById('mad-libs-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
};