// src/utils.test.js
import { templates, generateStory } from './utils.js';

describe('utils.js', () => {
    test('templates array should have 5 templates', () => {
        expect(templates).toBeDefined();
        expect(templates).toHaveLength(5);
    });

    test('generateStory includes input words', () => {
        const noun = 'dog';
        const verb = 'run';
        const adjective = 'happy';
        const place = 'park';
        const story = generateStory(noun, verb, adjective, place);

        expect(story).toContain(noun);
        expect(story).toContain(verb);
        expect(story).toContain(adjective);
        expect(story).toContain(place);
    });

    test('generateStory matches one of the templates', () => {
        const noun = 'dog';
        const verb = 'run';
        const adjective = 'happy';
        const place = 'park';
        const story = generateStory(noun, verb, adjective, place);

        const possibleStories = templates.map(template =>
            template
                .replace('${noun}', noun)
                .replace('${verb}', verb)
                .replace('${adjective}', adjective)
                .replace('${place}', place)
        );
        expect(possibleStories).toContain(story);
    });

    test('generateStory handles empty strings', () => {
        const noun = '';
        const verb = '';
        const adjective = '';
        const place = '';
        const story = generateStory(noun, verb, adjective, place);

        const possibleStories = templates.map(template =>
            template
                .replace('${noun}', noun)
                .replace('${verb}', verb)
                .replace('${adjective}', adjective)
                .replace('${place}', place)
        );
        expect(possibleStories).toContain(story);
    });

    test('generateStory handles special characters', () => {
        const noun = 'dog&cat';
        const verb = 'run!';
        const adjective = 'happy@';
        const place = 'park#';
        const story = generateStory(noun, verb, adjective, place);

        expect(story).toContain(noun);
        expect(story).toContain(verb);
        expect(story).toContain(adjective);
        expect(story).toContain(place);
    });
});