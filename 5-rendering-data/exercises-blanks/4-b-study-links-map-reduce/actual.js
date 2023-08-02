'use strict';

const actual = (linksData) => {
  const divEl = document.createElement('div');

  const h3El = document.createElement('h3');
  h3El.textContent = linksData.topic;
  divEl.appendChild(h3El);

  const entryToLi = (entry) => {
    const liEl = document.createElement('li');
    const aEl = document.createElement('a');
    aEl.innerHTML = entry[Object.keys(entry)[0]];
    aEl.href = entry[Object.keys(entry)[0]];
    aEl.target = '_blank';
    liEl.appendChild(aEl);
    return liEl;
  };

  const appendLiToList = (listEl, nextLi) => {
    listEl.appendChild(nextLi);
    return listEl;
  };

  const ulEl = Object.values(linksData.links)
    .map(entryToLi)
    .reduce(appendLiToList, document.createElement('ul'));

  divEl.appendChild(ulEl);

  return divEl;
};
