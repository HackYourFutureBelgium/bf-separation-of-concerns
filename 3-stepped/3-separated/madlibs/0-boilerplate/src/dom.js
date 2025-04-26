// src/dom.js
export const getFormInputs = () => {
    const noun = document.getElementById('noun').value.trim();
    const verb = document.getElementById('verb').value.trim();
    const adjective = document.getElementById('adjective').value.trim();
    const place = document.getElementById('place').value.trim();
    return { noun, verb, adjective, place };
};

export const updateStoryOutput = (story) => {
    const storyOutput = document.getElementById('story-output');
    if (storyOutput) {
        storyOutput.innerText = story;
    } else {
        console.error('Story output element not found');
    }
};

export const resetForm = (form) => {
    form.reset();
};