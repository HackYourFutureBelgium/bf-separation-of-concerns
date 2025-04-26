// src/data.js

// Array of story templates
const storyTemplates = [
    `One day, a ${adjective} ${noun} decided to ${verb} in the ${place}. It was the most hilarious adventure ever!`,
    `In the ${place}, a ${adjective} ${noun} loved to ${verb} every day, making everyone laugh.`,
    `A ${adjective} ${noun} went to the ${place} to ${verb}, creating a funny memory!`
];

/**
 * Generates a Mad Libs story using the provided words.
 * @param {string} noun - A noun (e.g., "dog").
 * @param {string} verb - A verb (e.g., "run").
 * @param {string} adjective - An adjective (e.g., "silly").
 * @param {string} place - A place (e.g., "park").
 * @returns {string} The generated story.
 */
export const generateStory = (noun, verb, adjective, place) => {

    // Select a random template
    const randomTemplate = storyTemplates[Math.floor(Math.random() * storyTemplates.length)];
    // Replace placeholders with user inputs
    return randomTemplate
        .replace('${noun}', noun)
        .replace('${verb}', verb)
        .replace('${adjective}', adjective)
        .replace('${place}', place);
};