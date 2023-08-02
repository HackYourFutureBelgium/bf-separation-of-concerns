'use strict';

const actual = (linksData) => {
  const divEl = document.createElement('div');

  const h3El = document.createElement('h3');
  h3El.textContent = linksData.topic;
  divEl.appendChild(h3El);

  const ulEl = document.createElement('ul');
  for (const key in linksData.links) {
    const liEl = document.createElement('li');

    const aEl = document.createElement('a');
    aEl.textContent = key;
    aEl.href = linksData.links[key];
    aEl.target = '_blank';
    liEl.appendChild(aEl);

    ulEl.appendChild(liEl);
  }
  divEl.appendChild(ulEl);

  return divEl;
};
