// src/handlers.js
/*import { getFormInputs, updateStoryOutput, resetForm } from './dom.js';
import { generateStory } from './utils.js';

export const handleFormSubmit = (event) => {
    event.preventDefault();
    const { noun, verb, adjective, place } = getFormInputs();
    console.log('Input values:', { noun, verb, adjective, place }); // Debug: Check the values
    if (!noun || !verb || !adjective || !place) {
        alert('Please fill in all fields!');
        return;
    }
    const story = generateStory(noun, verb, adjective, place);
    console.log('Generated story:', story); // Debug: Check the generated story
    updateStoryOutput(story);
    resetForm(event.target);
};*/

// src/handlers.js
import { updateStoryOutput, resetForm } from './dom.js';
import { generateStory } from './utils.js';

export const handleFormSubmit = (event) => {
    event.preventDefault();
    // Fetch values directly to test
    const noun = document.getElementById('noun').value.trim();
    const verb = document.getElementById('verb').value.trim();
    const adjective = document.getElementById('adjective').value.trim();
    const place = document.getElementById('place').value.trim();
    
    console.log('Directly fetched values:', { noun, verb, adjective, place });
    if (!noun || !verb || !adjective || !place) {
        alert('Please fill in all fields!');
        return;
    }
    const story = generateStory(noun, verb, adjective, place);
    updateStoryOutput(story);
    resetForm(event.target);
};