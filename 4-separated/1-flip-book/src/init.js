import { INPUT_ID } from '../data/constants.js';

import { handleInput } from './listeners/handle-input.js';

// application entry point


handleInput(document.getElementById(INPUT_ID));
