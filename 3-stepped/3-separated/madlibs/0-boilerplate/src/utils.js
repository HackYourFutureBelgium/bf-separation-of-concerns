
export const templates = [
    'Once upon a time, a ${noun} decided to ${verb} in the ${place}.',
    'In a ${place}, there lived a ${adjective} ${noun} who loved to ${verb}.',
    'Every day, the ${noun} would ${verb} in the ${place}, making everyone ${adjective}.',
    'One day, a ${adjective} ${noun} came to the ${place} and started to ${verb}.',
    'The ${noun} was so ${adjective} that it made everyone in the ${place} want to ${verb}.',
];



export const generateStory = (noun, verb, adjective, place) => {
    console.log('generateStory inputs:', { noun, verb, adjective, place });
    const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
    return randomTemplate
        .replace('${noun}', noun)
        .replace('${verb}', verb)
        .replace('${adjective}', adjective)
        .replace('${place}', place);
};