'use strict';

// helper function - https://stackoverflow.com/a/35953318
// used to convert object property names (camel case)
// into titles (words with spaces between them)
const camelCaseToTitleCase = (camelCaseString) => {
  const result = camelCaseString
    .replace(/([a-z])([A-Z][a-z])/g, '$1 $2')
    .replace(/([A-Z][a-z])([A-Z])/g, '$1 $2')
    .replace(/([a-z])([A-Z]+[a-z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z][a-z])/g, '$1 $2')
    .replace(/([a-z]+)([A-Z0-9]+)/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-rt-z][a-z]*)/g, '$1 $2')
    .replace(/([0-9])([A-Z][a-z]+)/g, '$1 $2')
    .replace(/([A-Z]{2,})([0-9]{2,})/g, '$1 $2')
    .replace(/([0-9]{2,})([A-Z]{2,})/g, '$1 $2')
    .trim();

  return result.charAt(0).toUpperCase() + result.slice(1);
};

const actual = (obj) => {
  const dl = document.createElement('dl');

  for (const key in obj) {
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dd.classList.add('value');
    if (!key.includes('_')) {
      dt.innerText = camelCaseToTitleCase(key);
      dd.innerText = String(obj[key]);
      dl.append(dt, dd);
    }
  }

  return dl;
};
