import { init } from './init.js';
import * as listenerModule from './listener.js';

// Mock the setupListeners function
jest.mock('./listener.js', () => ({
  setupListeners: jest.fn()
}));

describe('init.js', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();

    // Ensure document is defined (for debugging)
    if (typeof document === 'undefined') {
      throw new Error('document is undefined; ensure Jest is using jsdom environment');
    }

    // Spy on document.addEventListener and document.removeEventListener
    jest.spyOn(document, 'addEventListener');
    jest.spyOn(document, 'removeEventListener');
  });

  afterEach(() => {
    // Restore the spies after each test
    jest.restoreAllMocks();
  });

  test('init adds a DOMContentLoaded event listener to document', () => {
    // Call the init function
    init();

    // Verify that addEventListener was called with 'DOMContentLoaded' and setupListeners
    expect(document.addEventListener).toHaveBeenCalledWith(
      'DOMContentLoaded',
      listenerModule.setupListeners
    );
  });

  test('setupListeners is called when DOMContentLoaded event is triggered', () => {
    // Call the init function to set up the event listener
    init();

    // Simulate the DOMContentLoaded event
    const event = new Event('DOMContentLoaded');
    const addEventListenerCall = document.addEventListener.mock.calls.find(
      call => call[0] === 'DOMContentLoaded'
    );
    const callback = addEventListenerCall[1]; // The listener callback (setupListeners)
    callback(event); // Manually trigger the callback

    // Verify that setupListeners was called
    expect(listenerModule.setupListeners).toHaveBeenCalledTimes(1);
  });
});